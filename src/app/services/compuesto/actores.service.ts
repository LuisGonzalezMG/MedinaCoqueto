import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoApi } from '../../../environments/infoApi.environmemnts';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  
  url:string = "http://localhost:3000/actores";

  constructor(private _http: HttpClient) { }


  getEntries():Observable<InfoApi[]>{
    return this._http.get<InfoApi[]>(this.url);
  }


}
