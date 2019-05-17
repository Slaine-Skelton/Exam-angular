import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ClipartApiService {

  private _siteURL = 'http://localhost:3000/data/?title=';

  clipartDataCollection: AngularFirestoreCollection<IOpenClipArt>;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.clipartDataCollection = _afs.collection<IOpenClipArt>("saved_cliparts");
   }

  getClipartData(clipartSearchTitle: string): Observable<IOpenClipArt>{
    return this._http.get<IOpenClipArt>(this._siteURL + clipartSearchTitle);
  }

  saveToCloud(clip: IOpenClipArt){
    this.clipartDataCollection.add(JSON.parse(JSON.stringify(clip)));
  }
}
