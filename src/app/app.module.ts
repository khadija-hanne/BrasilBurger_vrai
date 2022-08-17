import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';
import { CatalogueItemComponent } from './produits/catalogue/catalogue-item/catalogue-item.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { CatalogueDetailComponent } from './produits/catalogue/catalogue-detail/catalogue-detail.component';
import { PanierComponent } from './panier/panier.component';
import { ComplementsComponent } from './produits/complements/complements.component';
import { BoissonComponent } from './produits/catalogue/catalogue-detail/boisson/boisson.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandeDetailsComponent } from './commandes/commande-details/commande-details.component';
import { AdminModule } from './admin/admin.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: 
  [//les composants
    AppComponent,
    CatalogueComponent,
    CatalogueItemComponent,
    HeaderComponent,
    FooterComponent,
    CatalogueDetailComponent,
    PanierComponent,
    ComplementsComponent,
    BoissonComponent,
    CommandesComponent,
    CommandeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule
    
  ],
  providers: [DatePipe],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
