export interface Client {
    id: string;
    nom: string;
    prenom: string;
    adresse: string;
}


export interface Course {
    id: string;
    client: string;
    date: Date;
    prix: number;
    type: string;
}
