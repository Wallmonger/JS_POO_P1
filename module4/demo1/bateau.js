import {Vehicule} from "./vehicule.js";

export class Bateau extends Vehicule {
    constructor(numeroSerie, immat, marque, modele, vitesse, vitesseMax, dateMiseEnCirculation, energie , categorie, tirantEauMaxi, typeDeCoque ) {
        super(numeroSerie, immat, marque, modele, vitesse, vitesseMax, dateMiseEnCirculation, energie, categorie);

        this.tirantEauMaxi = tirantEauMaxi;
        this.typeDeCoque = typeDeCoque;

    }
}