import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommandesComponent } from "./commandes/commandes.component";
import { CommandeDetailComponent } from "./commande-detail/commande-detail.component";


const routes : Routes = [
    {path : "", component : CommandesComponent},
    {path : ":id", component : CommandeDetailComponent},
]

@NgModule({
    
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})

export class CommandesRoutingModule {}