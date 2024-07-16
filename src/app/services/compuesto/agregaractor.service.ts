import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoApi } from '../../../environments/infoApi.environmemnts';


@Injectable({
  providedIn: 'root'
})
export class AgregaractorService {
  private apiUrl = 'http://localhost:3000/actor';

  constructor(private http: HttpClient) { }
  
  agregarActor(data: InfoApi): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  
}
