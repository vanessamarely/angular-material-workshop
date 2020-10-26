import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiRoot: string = 'https://run.mocky.io/v3/ad301f67-d502-4836-aab6-240c9a411838';
  
  constructor(private http: HttpClient) { }

  /* Get Api Data from mock service */
  getApi() {
    return this.http
      .get<Array<{}>>(this.apiRoot)
      .pipe(map(data => data), catchError(this.handleError));
  }
  /* Handle request error */
  private handleError(res: HttpErrorResponse | any): any {
    return observableThrowError(res.error || 'Server error');
  }
}
