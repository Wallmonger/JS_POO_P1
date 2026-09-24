import {Employe} from "./Employe.js";

export class Graphiste extends Employe {
    constructor(nom, prenom, email, niveau, logiciels) {
        super(nom, prenom, email, niveau);

        this.logiciels = logiciels;
    }

    afficherDetails() {
        return `${this.prenom} ${this.nom} (Email: ${this.email}, niveau: ${this.niveau})\n${this.prenom} crée des visuels avec ${this.logiciels.join(", ")}`
    }
}