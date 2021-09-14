import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import EventData from '../../../src/types/EventData';


@Injectable({
  providedIn: 'root'
})
export class FbConversionService {

  baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  postPageView(evt: EventData) {
    const url = this.baseUrl + '/page-view'

    return this.http.post(
      url,
      evt,
      {
        observe: 'body',
        responseType: 'json'
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  postCustomEvent(evt: EventData) {
    const url = this.baseUrl + '/custom-event'

    return this.http.post(
      url,
      evt,
      {
        observe: 'body',
        responseType: 'json'
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
