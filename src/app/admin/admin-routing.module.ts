import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes : Routes = [
    {path : "commandes", loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandesModule)},
    {path : "livraisons", loadChildren: () => import('./livraisons/livraisons.module').then(m => m.LivraisonsModule)},
    {path : "produits", loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)},
    {path : "", loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandesModule)},
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : []
})

export class AdminRoutingModule {}