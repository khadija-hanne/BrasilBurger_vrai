import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../model/menu';
import { Produits } from '../model/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private productUrl = "http://localhost:8000/api/produits"
  tabBoisson : { qte:number; sommeQte:number }[] = [];

  constructor(private http : HttpClient) { }

  getProduct(id:number):Observable<Menu>{
    return this.http.get<Menu>(this.productUrl+"/"+id);
  }

  getProducts():Observable<Produits[]>{
    return this.http.get<Produits[]>(this.productUrl);
  }

  addProduct(product : any , type : string):Observable<Produits|Menu>{
    return this.http.post<Produits|Menu>(environment.url+type,product);
  }
}
