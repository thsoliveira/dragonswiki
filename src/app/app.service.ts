import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Dragon } from './_models/dragon.model';

const endpoint = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(private _http: HttpClient) { }

	getDragons(): Observable<Dragon[]> {
		return this._http.get<Dragon[]>(endpoint)
			.pipe(
				tap(
					dragons => console.log(dragons)
				),
				catchError(this.handleError('getDragons', []))
			);
	}

	getRequest(id?: number): Observable<any> {
		let url = endpoint;

		if (id !== undefined) {
			url = `${endpoint}/${id}`;
		}

		return this._http.get(url).pipe(
			tap(
				data => console.log(data)
			),
			catchError(
				err => {
					this.handleError(err, url);
					return new Observable<any>();
				}
			)
		);
	}

	deleteRequest(id: number): Observable<any> {
		return this._http.delete(endpoint + `/${id}`)
			.pipe(
				tap(_ => console.log(`deleted dragon id=${id}`)),
				catchError(
					err => {
						this.handleError(err, endpoint);
						return new Observable<any>();
					}
				)
			);
	}

	postRequest(body: any): Observable<any> {
		return this._http.post(endpoint, body).pipe(
			tap((dragon: Dragon) => console.log(`added dragon w/ id=${dragon.id}`)),
			catchError(
				err => {
					this.handleError(err, endpoint);
					return new Observable<any>();
				}
			)
		);
	}

	updateRequest(id: number, body: any): Observable<any> {
		const url = `${endpoint}/${id}`;
		return this._http.put(url, body).pipe(
			tap(_ => console.log(`updated dragon id=${id}`)),
			catchError(
				err => {
					this.handleError(err, endpoint);
					return new Observable<any>();
				}
			)
		);
	}


	getHeaders() {

		// return new HttpHeaders({ 
		// 	'Content-Type': 'application/json', 
		// 	'Accept': 'application/json', 
		// 	'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Cache-Control,access_token, access-control-allow-origin,authorization,content-type',
		// 	'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS, BATATA', 
		// 	'Access-Control-Allow-Origin': 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'

		// });

		// Access-Control-Allow-Headers: X-Requested-With,Content-Type,Cache-Control,access_token, access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization,content-type
		// Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD, OPTIONS
		// Access-Control-Allow-Origin: *


		return new HttpHeaders()
			.set('Content-Type', 'application/json; charset=utf-8')
			.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Cache-Control,access_token, access-control-allow-origin,authorization,content-type')
			.set('Access-Control-Allow-Origin', 'GET, PUT, POST, DELETE, HEAD, OPTIONS, BATATA')
			.set('Access-Control-Allow-Origin', '*');

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
