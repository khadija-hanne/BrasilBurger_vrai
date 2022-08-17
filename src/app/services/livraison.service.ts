import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  LivreurUrl = "http://localhost:8000/api/livreurs";

  constructor(private http : HttpClient) { }

  getLivreurs():Observable<Livreur[]>{
    return this.http.get<Livreur[]>(this.LivreurUrl);
  }


}
