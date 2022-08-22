import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes : Commande[] = [];
  index = 0;
  p: number = 1;
  searchText : any;
  prix = 0;

  constructor(private serviceCommande : CommandeService) { }

  ngOnInit(): void {

    this.serviceCommande.getCommandes().subscribe(resultat => {
      // console.log(resultat);
      this.commandes = resultat;
      
    });
    ;
    
  }

  etat(commande : Commande , etat : string){
    // commande.etatCommande = etat
    this.serviceCommande.changerEtat(commande,etat)
  }

  totalPrice(commande: Commande){
    commande.Produits.forEach(element => {
      return this.prix += element.produit.prix * element.produit.quantite;
      console.log(this.prix);
      
    });
  }
}
