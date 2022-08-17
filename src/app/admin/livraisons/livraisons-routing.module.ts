import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LivraisonDetailComponent } from "./livraison-detail/livraison-detail.component";
import { LivraisonsComponent } from "./livraisons/livraisons.component";
import { LivreurLivraisonsComponent } from "./livreur-livraisons/livreur-livraisons.component";


const routes : Routes = [
    {path : "", component : LivraisonsComponent},
    {path : ":id", component : LivraisonDetailComponent},
    {path : ":livreur/:id", component : LivreurLivraisonsComponent},
]

@NgModule({
    
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})

export class LivraisonsRoutingModule {}