import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Dragon } from './models/dragon.model';

const endpoint = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(private _http: HttpClient, ) { }

	getDragons(): Observable<Dragon[]> {
		return this._http.get<Dragon[]>(endpoint)
			.pipe(
				tap(
					dragons => console.log('Fetch dragons')
				),
				catchError(this.handleError('getDragons', []))
			);
	}

	getDragon(id: number): Observable<Dragon> {
		const url = `${endpoint}/${id}`;

		return this._http.get<Dragon>(url).pipe(
			tap(_ => console.log(`fetched dragon id=${id}`)),
			catchError(this.handleError<Dragon>(`getDragon id=${id}`))
		);
	}

	addDragon(dragon): Observable<Dragon> {
		return this._http.post<Dragon>(endpoint, dragon, httpOptions).pipe(
			tap((dragon: Dragon) => console.log(`added dragon w/ id=${dragon.id}`)),
			catchError(this.handleError<Dragon>('addDragon'))
		);
	}

	updateDragon(id, dragon): Observable<any> {
		const url = `${endpoint}/${id}`;
		return this._http.put(url, dragon, httpOptions).pipe(
			tap(_ => console.log(`updated dragon id=${id}`)),
			catchError(this.handleError<any>('updateDragon'))
		);
	}

	deleteDragon(id): Observable<Dragon> {
		const url = `${endpoint}/${id}`;

		return this._http.delete<Dragon>(url, httpOptions).pipe(
			tap(_ => console.log(`deleted dragon id=${id}`)),
			catchError(this.handleError<Dragon>('deleteDragon'))
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
