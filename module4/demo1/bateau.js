import {Vehicule} from "./vehicule.js";

export class Bateau extends Vehicule {
    constructor(numeroSerie, immat, marque, modele, vitesse, vitesseMax, dateMiseEnCirculation, energie , categorie, tirantEauMaxi, typeDeCoque ) {
        super(numeroSerie, immat, marque, modele, vitesse, vitesseMax, dateMiseEnCirculation, energie, categorie);

        this.tirantEauMaxi = tirantEauMaxi;
        this.typeDeCoque = typeDeCoque;

    }

    afficherDetails () {
        return(
            super.afficherDetails() +
            `tirant d'eau maxi : ${this.tirantEauMaxi}
            type de coque : ${this.typeDeCoque}`
        )
    }


}