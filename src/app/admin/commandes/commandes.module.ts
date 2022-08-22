import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandesRoutingModule } from './commandes-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommandeDetailComponent,
    CommandesComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    CommandesRoutingModule,
  ]
})
export class CommandesModule { }
