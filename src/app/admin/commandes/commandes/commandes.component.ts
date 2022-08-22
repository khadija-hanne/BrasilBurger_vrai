import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/model/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes : Commande[] = [];
  commandesToday : Commande[] = [];
  today = new Date();
  searchText : any;
  p: number = 1;

  constructor(private serviceCom :CommandeService, private date : DatePipe , private http : HttpClient) { }

  ngOnInit(): void {
    this.serviceCom.getCommandes().subscribe(resultat => 
      {
        this.commandes = resultat;
        resultat.forEach(element => {
          // console.log(element.date);
          if (this.isToday(element.date)) {
            this.commandesToday.push(element);
          } 
        });
      }
    )
  }

  isToday(date : Date){
    if (this.date.transform(date) == this.date.transform(this.today)) {
      return true;
    }
    return false;
  }

  etat(commande : Commande , etat : string){
    this.serviceCom.changerEtat(commande,etat);
    // commande.etatCommande = etat

  }


















  changerStatut(commande:Commande , etat : string){
  
    this.http.put<Commande>("http://localhost:8000/api/commandes/"+commande.id,

    {
      "etatCommande" : etat
    }
    
  ).subscribe();
    // location.reload();
  }

}
