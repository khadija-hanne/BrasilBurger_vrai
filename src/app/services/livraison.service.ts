import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../model/commande';
import { livraison } from '../model/livraison';
import { Livreur } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  LivreurUrl = "http://localhost:8000/api/livreurs";

  constructor(private http : HttpClient) { }

  getLivreurs():Observable<Livreur[]>{
    return this.http.get<Livreur[]>(environment.url+"livreurs");
  }

  getZonesToday():Observable<Zone[]>{
    return this.http.get<Zone[]>(environment.url+"zoneToday");
  }

  getCommandes(idZone : number) : Observable<Commande[]>{
    return this.http.get<Commande[]>(environment.url+"commandesToday/"+idZone)
  }

  livrer(livraison : livraison) : Observable<livraison>{
    return this.http.post<livraison>(environment.url+"livraisons", livraison)
  }
  changerEtatLivreur(idLivreur : number , etat : string) : Observable<Livreur>{
    return this.http.put<Livreur>(environment.url+"livreurs/"+idLivreur ,{"etatLivreur":etat})
  }
}
