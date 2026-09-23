import {Voiture} from "./voiture.js";

export class Client {
    #noClient;
    #voitures;

    //Attribut de classe
    static nbClientsCrees = 0;

    constructor(noClient, nom, prenom, adresse, dateNaissance, noPermis = "XXXXXXXX") {
        console.log("L'instance de client est crée");
        this.#noClient = noClient;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.dateNaissance = dateNaissance;
        this.noPermis = noPermis;
        this.#voitures = [];

        Client.ajouterClient();
    }

    afficherDonneesClient () {
        return `
            Numéro de client : ${this.noClient}, 
            nom : ${this.nom}, 
            prenom : ${this.prenom}, 
            adresse: ${this.adresse}, 
            dateNaissance: ${this.dateNaissance ? this.dateNaissance.toLocaleDateString() : "<inconnu>"}, 
            noPermis: ${this.noPermis},
            
        `;
    }

    static ajouterClient () {
        Client.nbClientsCrees++;
    }

    static retirerClient () {
        Client.nbClientsCrees--;
    }

    get noClient() {
        return this.#noClient;
    }

    set noClient(value) {
        this.#noClient = value;
    }

    ajouterVoiture(voiture) {
        if(voiture instanceof Voiture) {
            if(!this.#voitures.includes(voiture)) {
                this.#voitures.push(voiture);
                voiture.proprietaire = this;

            }
        }
    }
}