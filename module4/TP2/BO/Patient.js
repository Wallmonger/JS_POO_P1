import {MedecinGeneraliste} from "./MedecinGeneraliste.js";
import {Personne} from "./Personne.js";


export class Patient extends Personne {

    constructor(lastname, firstname, phone, gender, securityNumber, birthday, comment, adresse ) {
        super(lastname, firstname, phone, adresse);

        this.gender = gender;
        this.securityNumber = securityNumber;
        this.birthday = birthday;
        this.comment = comment;
    }


    afficher () {
        super.afficher();
        console.log(
            `Sexe: ${this.gender === "F" ? "Feminin" : "Masculin"}\n` +
            `Numéro de sécurité sociale : ${this.securityNumber}\n` +
            `Date de naissance : ${this.birthday.toLocaleDateString()}\n` +
            `Commentaires : ${this.comment ? this.comment : "[aucun commentaire]"}`

        )

    }


}