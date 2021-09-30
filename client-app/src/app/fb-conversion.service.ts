import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import EventData from '../../../src/types/EventData';
import GAIdentityData from '../../../src/types/GAIdentifyData';
import GAPageData from '../../../src/types/GAPageData';
import GATrackData from '../../../src/types/GATrackData';

@Injectable({
  providedIn: 'root'
})
export class FbConversionService {

  baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  postPageView(evt: EventData) {
    const url = this.baseUrl + '/fb/page-view'

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
    const url = this.baseUrl + '/fb/custom-event'

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

  postGAPageView(evt: GAPageData) {
    const url = this.baseUrl + '/ga/page-view'

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

  postGAIdentify(evt: GAIdentityData) {
    const url = this.baseUrl + '/ga/identify'

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

  postGATrack(evt: GATrackData) {
    const url = this.baseUrl + '/ga/track'

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
