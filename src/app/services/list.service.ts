import { Injectable } from '@angular/core';

import { Animal } from '../Interface/Animal';


//obrigatorio
import { HttpClient, HttpHeaders } from '@angular/common/http';


//obrigatorio
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL = 'http://localhost:3000/animals'


  //obrigatorio
  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiURL)
  }
}
