import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { NewLivraisonComponent } from './new-livraison/new-livraison.component';
import { LivreurLivraisonsComponent } from './livreur-livraisons/livreur-livraisons.component';
import { LivraisonsRoutingModule } from './livraisons-routing.module';
import { CommandesZoneComponent } from './commandes-zone/commandes-zone.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LivraisonDetailComponent,
    LivraisonsComponent,
    NewLivraisonComponent,
    LivreurLivraisonsComponent,
    CommandesZoneComponent
  ],
  imports: [
    CommonModule,
    LivraisonsRoutingModule,
    FormsModule
  ]
})
export class LivraisonsModule { }
