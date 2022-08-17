import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { NewLivraisonComponent } from './new-livraison/new-livraison.component';
import { LivreurLivraisonsComponent } from './livreur-livraisons/livreur-livraisons.component';
import { LivraisonsRoutingModule } from './livraisons-routing.module';



@NgModule({
  declarations: [
    LivraisonDetailComponent,
    LivraisonsComponent,
    NewLivraisonComponent,
    LivreurLivraisonsComponent
  ],
  imports: [
    CommonModule,
    LivraisonsRoutingModule
  ]
})
export class LivraisonsModule { }
