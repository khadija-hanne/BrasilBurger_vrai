import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';

import { PanierComponent } from './panier/panier.component';
import { CatalogueDetailComponent } from './produits/catalogue/catalogue-detail/catalogue-detail.component';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';

const routes: Routes = 
[
  {path: '', component:CatalogueComponent},
  {path: 'produit/:id', component:CatalogueDetailComponent},
  {path: 'cart', component:PanierComponent},
  {path: 'commandes', component:CommandesComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

  
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
