import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitsComponent } from './produits/produits.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { ProduitsRoutingModule } from './produits-routing.module';



@NgModule({
  declarations: [
    ProduitsComponent,
    NewProduitComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }
