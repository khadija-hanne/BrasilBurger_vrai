import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/services/livraison.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {

  constructor(private serviceLivraison : LivraisonService) { }

  ngOnInit(): void {
    this.serviceLivraison.getZonesToday().subscribe(resultat => {
      console.log(resultat);
      
    })
  }

}
