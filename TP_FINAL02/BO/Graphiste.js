import {Employe} from "./Employe.js";

export class Graphiste extends Employe {
    constructor(nom, prenom, email, niveau, logiciels) {
        super(nom, prenom, email, niveau);

        this.logiciels = logiciels;
    }

    afficherDetails() {
        console.log(super.afficherDetails());
        return `${this.prenom} crée des visuels avec ${this.logiciels.join(", ")}`
    }
}