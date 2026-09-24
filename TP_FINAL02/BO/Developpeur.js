import {Employe} from "./Employe.js";

export class Developpeur extends Employe {
    constructor(nom, prenom, email, niveau, langages) {
        super(nom, prenom, email, niveau);

        this.langages = langages;
    }

    afficherDetails() {
        return `${this.prenom} ${this.nom} (Email: ${this.email}, niveau: ${this.niveau})\n${this.prenom} code en ${this.langages.join(", ")}`
    }
}