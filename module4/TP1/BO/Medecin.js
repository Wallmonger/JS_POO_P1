import {Adresse} from "./Adresse.js";
import {Personne} from "./Personne.js";

export class Medecin extends Personne {

    static MAX_CRENEAUX = 15;

    constructor(lastname, firstname, phone, adresse) {
        super(lastname, firstname, phone, adresse);
        this.creneaux = [];
    }

    afficher() {
        super.afficher();
        this.creneaux.forEach(creneau => creneau.afficher());
    }


    ajouterCreneau (objetCreneau) {

        if (this !== objetCreneau.medecin) {
            console.log("medecin déjà pris")
            return;
        }

        if (this.creneaux.length > Medecin.MAX_CRENEAUX -1) {
            console.log(`Le médecin ${this.lastname} ${this.firstname} a atteint son maximum de créneaux disponible`);
            return;
        }

        this.creneaux.push(objetCreneau);

    }


}