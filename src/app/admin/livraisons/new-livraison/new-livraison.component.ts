import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/model/commande';
import { LivraisonService } from 'src/app/services/livraison.service';

@Component({
  selector: 'app-new-livraison',
  templateUrl: './new-livraison.component.html',
  styleUrls: ['./new-livraison.component.css']
})
export class NewLivraisonComponent implements OnInit {

  zones : any[] = [];
  commandes : Commande[] = [];
  constructor(private serviceLivraison : LivraisonService) { }

  ngOnInit(): void {
    this.serviceLivraison.getZonesToday().subscribe(resultat => {
      this.zones = resultat;
    })

    
  }

}
