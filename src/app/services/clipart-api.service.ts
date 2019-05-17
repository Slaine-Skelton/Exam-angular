import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipartApiService {

  private _siteURL = 'http://localhost:3000/data/?title=';

  constructor(private _http: HttpClient) { }

  getClipartData(clipartSearchTitle: string): Observable<IClipartDetails>{
    return this._http.get<IClipartDetails>(this._siteURL + clipartSearchTitle);
  }
}
