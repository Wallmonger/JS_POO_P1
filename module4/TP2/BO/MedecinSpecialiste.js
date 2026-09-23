import {Medecin} from "./Medecin.js";

export class MedecinSpecialiste extends Medecin {
    constructor(lastname, firstname, phone, adresse, specialite, tarif) {
        super(lastname, firstname, phone,adresse);
        this.specialite = specialite;
        this.tarif = tarif;
    }

    afficher() {
        super.afficher();
        console.log(`Spécialité : ${this.specialite}`);
        console.log(`Tarif: ${this.tarif}€`);
    }
}