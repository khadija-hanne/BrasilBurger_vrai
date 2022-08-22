import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommandesZoneComponent } from "./commandes-zone/commandes-zone.component";
import { LivraisonDetailComponent } from "./livraison-detail/livraison-detail.component";
import { LivraisonsComponent } from "./livraisons/livraisons.component";
import { LivreurLivraisonsComponent } from "./livreur-livraisons/livreur-livraisons.component";


const routes : Routes = [
    {path : ":id", component : LivraisonDetailComponent},
    {path : "livreur/:id", component : LivreurLivraisonsComponent},
    {path : "commandesZone/:id", component : CommandesZoneComponent},
    {path : "", component : LivraisonsComponent}

]

@NgModule({
    
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})

export class LivraisonsRoutingModule {}