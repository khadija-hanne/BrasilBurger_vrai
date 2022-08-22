import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { livraison } from 'src/app/model/livraison';
import { Livreur } from 'src/app/model/user';
import { CommandeService } from 'src/app/services/commande.service';
import { LivraisonService } from 'src/app/services/livraison.service';

@Component({
  selector: 'app-commandes-zone',
  templateUrl: './commandes-zone.component.html',
  styleUrls: ['./commandes-zone.component.css']
})
export class CommandesZoneComponent implements OnInit {
  commandes : Commande[] = [];
  commandeschecked : Commande[] = [];
  livreurs : Livreur[] = [];
  idLivreur !: number;
  etatLivraison !: string;
  livraison : any;
  idCommande : any;
  etatCommande !: string;
  tab : number[] = [];
  disabled = false;
  constructor(private serviceLivraison : LivraisonService, 
              private route : ActivatedRoute,
              private serviceCommande : CommandeService) { }

  ngOnInit(): void {
    const idZone = this.route.snapshot.params['id'];
    this.serviceLivraison.getCommandes(idZone).subscribe(resultat => {
        this.commandes = resultat;
        // console.log(this.commandes);
    })
    
    this.serviceLivraison.getLivreurs().subscribe(resultat => {
        resultat.forEach(element => {
          if (element.etatLivreur === "disponible") {
            this.livreurs.push(element);
          }
        });
        
    })

    console.log(this.commandeschecked);
    
  }

  livrer(){

    for (let i = 0; i < this.isChecked().length; i++) {
      this.idCommande = {"id":this.isChecked()[i]}
      this.commandeschecked.push(this.idCommande)
      
    }
    console.log(this.commandeschecked);

    this.livraison = {
      "livreur": {"id" : this.idLivreur},
      "commandes": this.commandeschecked,
      "zone":{"id" : this.route.snapshot.params['id']}
    }
    if (this.commandeschecked.length === 0 || this.idLivreur === 0) {
      return;
    }
    this.serviceLivraison.livrer(this.livraison).subscribe(resultat => {
      this.commandeschecked.forEach(element => {
        this.serviceCommande.changerEtat(element,"livrée")
      });

      this.serviceLivraison.changerEtatLivreur(this.idLivreur,"indisponible")

    });
      


    console.log(this.livraison);
    
  }

  isChecked(){
    let tab= [];
    let inputs = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        tab.push(inputs[i].value);
      }
      
    }
    return tab;  
  }

  radio(e:Event){
    // const input = e.target as HTMLInputElement;
    let inputs = document.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    // this.idLivreur = +input.value; 
    console.log(inputs[0].value);
    // console.log(this.idLivreur);

    return this.idLivreur;
    
   }

}
