import {Adresse} from "./Adresse.js";


export class Patient {

    #adresse;

    constructor(lastname, firstname, phone, gender, securityNumber, birthday, comment, adresse ) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.phone = phone;
        this.gender = gender;
        this.securityNumber = securityNumber;
        this.birthday = birthday;
        this.comment = comment;
        this.ajouterAdresse(adresse);
    }


    afficher () {
        console.log(
            `${this.lastname.toUpperCase()} ${this.firstname}\n` +
            `Téléphone : ${this.phone}\n` +
            `Sexe: ${this.gender === "F" ? "Feminin" : "Masculin"}\n` +
            `Numéro de sécurité sociale : ${this.securityNumber}\n` +
            `Date de naissance : ${this.birthday.toLocaleDateString()}\n` +
            `Commentaires : ${this.comment ? this.comment : "[aucun commentaire]"}`

        )
        if (this.#adresse) {
            this.#adresse.afficher();
        } else {
            console.log("");
        }
    }

    get adresse() {
        return this.#adresse;
    }
    set adresse(value) {
        this.#adresse = value;
    }

    ajouterAdresse(adresse) {
        if (adresse instanceof Adresse) {
            if (!this.#adresse) {
                this.#adresse = adresse;
            }
        }
    }
}