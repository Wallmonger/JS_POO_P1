import {Vehicule} from "./vehicule.js";

export class Voiture extends Vehicule {

    static NB_ROUES_ROULANTE = 4;

    constructor(numeroSerie, immat, marque, modele, kilometrage, vitesse, vitesseMax, dateMiseEnCirculation, boiteDeVitesse, energie , categorie ) {
        super(numeroSerie, immat, marque, modele, vitesse, vitesseMax, dateMiseEnCirculation, energie, categorie);

        this.kilometrage = kilometrage;
        this.boiteDeVitesse = boiteDeVitesse;

    }



    afficherDonneesVoiture () {
        return `
            Immatriculation : ${this.immat}, 
            Marque : ${this.marque}, 
            Modèle : ${this.modele}, 
            Kilometrage: ${this.kilometrage}, 
            Vitesse: ${this.vitesse}, 
            VitesseMax: ${this.vitesseMax},
            DateMiseEnCirculation : ${this.dateMiseEnCirculation ? this.dateMiseEnCirculation.toLocaleDateString() : "<Inconnu>"}, 
            BoiteDeVitesse: ${this.boiteDeVitesse}, 
            Energie: ${this.energie}, 
            Categorie: ${this.categorie},
            
        `;
    }

}