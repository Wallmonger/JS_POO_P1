import {Employe} from "./Employe.js";

export class Developpeur extends Employe {
    constructor(nom, prenom, email, niveau, langages) {
        super(nom, prenom, email, niveau);

        this.langages = langages;
    }

    afficherDetails() {
        console.log(super.afficherDetails());
        return `${this.prenom} code en ${this.langages.join(", ")}`
    }
}