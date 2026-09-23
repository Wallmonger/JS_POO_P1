import {Adresse} from "./Adresse.js";

export class Personne {

    #adresse;

    constructor (lastname, firstname, phone, adresse) {
        this.lastname = lastname.toUpperCase();
        this.firstname = firstname;
        this.ajouterAdresse(adresse);
        this.formatPhoneNumber(phone);

    }

    afficher() {
        console.log(`${this.lastname} ${this.firstname} \nTéléphone: ${this.phone}
        `)
        if (this.#adresse) {
            this.#adresse.afficher()
        } else {
            console.log("")
        }

    }

    ajouterAdresse (adresse) {
        if (adresse instanceof Adresse) {
            if (!this.#adresse) {
                this.#adresse = adresse;
            }
        }
    }

    formatPhoneNumber(phone) {
        let cleanup = phone.replace(/[\s-]/g, '');

        if (cleanup.startsWith('+33')) {
            cleanup = "0" + cleanup.slice(3);
        }
        this.phone = cleanup;
    }

    get adresse() {
        return this.#adresse;
    }

    set adresse(value) {
        this.#adresse = value;
    }
}