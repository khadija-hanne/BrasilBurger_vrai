import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable, take } from 'rxjs';
import { Menu } from '../model/menu';
import { Zone } from '../model/zone';
import { Produits } from '../model/produits';
import { CatalogueDetailComponent } from '../produits/catalogue/catalogue-detail/catalogue-detail.component';
import { PanierService } from '../services/panier.service';
import { CommandeService } from 'src/app/services/commande.service';
import { Commande } from 'src/app/model/commande';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  tab:Produits[] | Menu[] = [];
  paniers : any[] = []
  zones:Zone[] = [];
  disabled = false;
  tabCommandes : {quantite : number,produit : string}[] = [];
  idZone !: number;
  commande !: any;


  
  constructor(private serviceCom : CommandeService , private servicePanier : PanierService, private sanitizer:DomSanitizer,private serviceCommande:CommandeService,private http : HttpClient, private router : Router) { }
  items$ = this.servicePanier.items$
  ngOnInit(): void {
    this.items$.subscribe(
      resultat => {
        this.tab = resultat;
      }
    );
    
    this.serviceCommande.getZones().subscribe(resultat =>
        {
          this.zones = resultat;
        }
      )
// console.log(this.productFormat());    
  }

  productFormat(){
    this.servicePanier.getPanier().subscribe(
      resultat => {
        resultat.forEach(element => {
            this.tabCommandes.push(
              {
                "quantite" : element.quantite,
                "produit" : "/api/produits/"+element.id
              }
            )
            
        });
        
      }


    );
    return this.tabCommandes;

  } 

  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}

deleteCart(product : Menu | Produits){
  this.servicePanier.deleteToCart(product);
  
}

totalPrice():number{
  let prix = 0;
  this.tab.forEach(element => {
    
    prix += element.prix*element.quantite;
  });
  return prix;
}

totalPriceProduct(product:Menu | Produits):number{
  return product.prix * product.quantite;
}

quantite(product:any, operateur:string){
  this.servicePanier.add(product,operateur);
}
 
choisirZone(){
  this.disabled = true;
  
}
zoneCheck(n:number){
  this.idZone=0;
  if (n!=0) {
    this.idZone=n
  } 
  // console.log(this.idZone);
  return this.idZone;
}

surPlace(e: any){  
  if (e.target.checked) {
    this.disabled=true;
    this.idZone=0;
  }
  else
  this.disabled=false;
  // console.log(this.zo);
}

aLivrer(){
  this.idZone=0;
  this.disabled=false;
}
 
 commander(){
  
  if (this.idZone === 0) {
    this.commande = {
      "Produits": this.productFormat(),
      "client" : "/api/clients/28"
     }
  }else{
    this.commande = {
      "Produits": this.productFormat(),
      "zone":"/api/zones/"+this.idZone,
      "client" : "/api/clients/28"
     }
  }
  
  this.serviceCom.purchase(this.commande).subscribe(resultat =>
        {
          // console.log(resultat);
          
          if (resultat) {
            this.servicePanier.viderPanier();
            this.router.navigate(['/commandes']);
          }
        }
    );
    //  tab.forEach(element => {this.servicePanier.removeCartItem(element)});
}
   

   radio(e:Event){
    const input = e.target as HTMLInputElement;
    this.idZone = +input.value; 
    // console.log(input.value);
    return this.idZone;
   }

  }
