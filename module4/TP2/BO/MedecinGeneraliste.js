
import {Medecin} from "./Medecin.js";

export class MedecinGeneraliste extends Medecin {
    static TARIF = 25;


    constructor(lastname, firstname, phone, adresse) {
       super(lastname, firstname, phone, adresse);
    }

    afficher () {

        super.afficher();
        console.log(`Tarif : ${MedecinGeneraliste.TARIF}€`);

    }

}