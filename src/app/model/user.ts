

export interface User{
    
    id:number;
    nom: string;
    prenom : string;
    email:string;
    telephone:string;
}

export interface Client{
    
    id:number;
    nom: string;
    prenom : string;
    email:string;
    telephone:string;
    adresse:string;
}

export interface Livreur{
    
    id:number;
    nom: string;
    prenom : string;
    email:string;
    telephone:string;
    matricule : string;
    etatLivreur : string;
}