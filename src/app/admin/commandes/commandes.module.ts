import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandesRoutingModule } from './commandes-routing.module';



@NgModule({
  declarations: [
    CommandeDetailComponent,
    CommandesComponent
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule
  ]
})
export class CommandesModule { }
