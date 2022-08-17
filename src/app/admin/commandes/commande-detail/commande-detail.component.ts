import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {

  commande !: Commande;

  constructor(private serviceCommande : CommandeService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    const commandeId = this.route.snapshot.params['id'];
    this.serviceCommande.getCommande(commandeId).subscribe(resultat => {
        this.commande = resultat;
        console.log(this.commande);
        
    })

  }

}
