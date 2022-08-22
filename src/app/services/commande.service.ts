import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../model/commande';
import { Menu } from '../model/menu';
import { Zone } from '../model/zone';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private commandesUrl = "http://localhost:8000/api/clients/28/commandes";
  constructor(private http : HttpClient) { }
  

  /* getCommandes():Commande[]{
    return this.commande;
  } */

  /* commander(){
    console.log("ok");
    
  } */

  getZones():Observable<Zone[]>{
    return this.http.get<Zone[]>(environment.url+"zones");
  }

  getCommandes():Observable<Commande[]>{
    return this.http.get<Commande[]>(environment.url+"commandes");
  }

  getCommande(id : number) : Observable<Commande> {
    return this.http.get<Commande>(environment.url+"commandes/"+id);
  }

  changerEtat(commande : Commande , etat : string) : Observable<Commande>{
    return this.http.put<Commande>(environment.url+"commandes/"+commande.id ,commande)
  }

  purchase(commande :Commande): Observable<Commande>{
 
   return this.http.post<Commande>(environment.url+"commandes",commande)
         
 }
    
}

