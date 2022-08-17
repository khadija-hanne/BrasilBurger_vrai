import { Menu } from "./menu";
import { Produits } from "./produits";
import { Client, User } from "./user";

export interface Commande {

    id : number;
    client : Client;
    date : Date;
    etatCommande :string;
    Produits : [
        {
            quantite : number;
            produit : Produits | Menu
        },
        {
            quantite : number;
            produit : Produits | Menu
        }
    ];
    
    zone : Zone;
    
}