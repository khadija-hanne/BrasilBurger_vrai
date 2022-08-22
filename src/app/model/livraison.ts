import { Commande } from "./commande";

export interface livraison {
    
        livreur: string,
        commandes: Commande[],
        zone: any
      
}