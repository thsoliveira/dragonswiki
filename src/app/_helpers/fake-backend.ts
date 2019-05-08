import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from '@app/_models';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

	constructor(private _toastr: ToastrService
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// array in local storage for registered users
		const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

		// wrap in delayed observable to simulate server api call
		return of(null).pipe(mergeMap(() => {
			if (users.length === 0) {

				const firstLogin = new User;
				firstLogin.username = 'admin';
				firstLogin.firstName = 'Sicred';
				firstLogin.lastName = 'Teste';
				firstLogin.password = 'admin';
				firstLogin.id = 1;

				users.push(firstLogin);
				localStorage.setItem('users', JSON.stringify(users));
			}
			// [{"username":"admin","firstName":"Sicred","lastName":"Teste","password":"admin","confirmPassword":"admin","id":1}]
			// authenticate
			if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
				// find if any user matches login credentials
				const filteredUsers = users.filter(user => {
					return user.username === request.body.username && user.password === request.body.password;
				});

				if (filteredUsers.length) {
					// if login details are valid return 200 OK with user details 
					const user = filteredUsers[0];
					const body = {
						id: user.id,
						username: user.username,
						firstName: user.firstName,
						lastName: user.lastName,
					};
					
					return of(new HttpResponse({ status: 200, body: body }));
				} else {
					// else return 400 bad request
					this._toastr.error('Username or password is incorrect');
					return throwError({ error: { message: 'Username or password is incorrect' } });
				}
			}

			// register user
			if (request.url.endsWith('/users/register') && request.method === 'POST') {
				// get new user object from post body
				const newUser = request.body;

				// validation
				const duplicateUser = users.filter(user => user.username === newUser.username).length;
				if (duplicateUser) {
					this._toastr.error('Username "' + newUser.username + '" is already taken');
					return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
				}

				// save new user
				newUser.id = users.length + 1;
				users.push(newUser);
				localStorage.setItem('users', JSON.stringify(users));
				
				this._toastr.success('Your account was successfully created');

				// respond 200 OK
				return of(new HttpResponse({ status: 200 }));
			}

			// pass through any requests not handled above
			return next.handle(request);

		}))

			// call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
			.pipe(materialize())
			.pipe(delay(500))
			.pipe(dematerialize());
	}
}

export let fakeBackendProvider = {
	// use fake backend in place of Http service for backend-less development
	provide: HTTP_INTERCEPTORS,
	useClass: FakeBackendInterceptor,
	multi: true
};
