import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Produits } from 'src/app/model/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

  @Input() boisson !: Produits
  qte:number=0

  constructor( private sanitizer : DomSanitizer, private serviceProduit:ProduitService) { }

  ngOnInit(): void {
  }

  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  quantite(n:number){
    if (this.qte === 0 && n < 0 || this.serviceProduit.tabBoisson[this.boisson.id].sommeQte ===
      this.serviceProduit.tabBoisson[this.boisson.id].qte && n>0) {
      return;
    }

    this.qte += n;
    this.serviceProduit.tabBoisson[this.boisson.id].sommeQte += n;
  }
}
