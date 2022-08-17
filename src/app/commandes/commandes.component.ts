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

  constructor(private serviceCommande : CommandeService) { }

  ngOnInit(): void {

    this.serviceCommande.getCommandes().subscribe(resultat => {
      console.log(resultat);
      this.commandes = resultat;
      
    })
  }

}
