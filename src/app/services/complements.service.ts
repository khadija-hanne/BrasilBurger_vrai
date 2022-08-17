import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complements } from '../model/complements';

@Injectable({
  providedIn: 'root'
})
export class ComplementsService {

  private complementsUrl = "http://localhost:8000/api/complements"

  constructor(private http : HttpClient){

  }

  getComplements():Observable<Complements>{
    return this.http.get<Complements>(this.complementsUrl);
  }
}
