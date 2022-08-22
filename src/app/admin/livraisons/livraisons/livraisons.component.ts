import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/model/commande';
import { Zone } from 'src/app/model/zone';
import { LivraisonService } from 'src/app/services/livraison.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {

  zones : any[] = [];
  commandes : Commande[] = [];
  constructor(private serviceLivraison : LivraisonService) { }

  ngOnInit(): void {
    this.serviceLivraison.getZonesToday().subscribe(resultat => {
      this.zones = resultat;
    })

    
  }

  

}
