import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoApi } from '../../environments/infoApi.environmemnts';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url:string = "http://localhost:3000/actores";

  constructor(private _http: HttpClient) { }

  getEntries():Observable<InfoApi[]>{
    return this._http.get<InfoApi[]>(this.url);
  }

}