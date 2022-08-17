import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewProduitComponent } from "./new-produit/new-produit.component";
import { ProduitsComponent } from "./produits/produits.component";


const routes : Routes = [
    {path : "", component : ProduitsComponent},
    {path : "new", component : NewProduitComponent},
]

@NgModule({
    
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})

export class ProduitsRoutingModule {}