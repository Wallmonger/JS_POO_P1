import {Adresse} from "./Adresse.js";

export class Medecin {

    #adresse;
    static MAX_CRENEAUX = 15;

    constructor(lastname, firstname, phone, adresse) {
        this.lastname = lastname.toUpperCase();
        this.firstname = firstname;
        this.formatPhoneNumber(phone);
        this.ajouterAdresse(adresse);
        this.creneaux = [];
    }

    afficher() {
        console.log(`${this.firstname} ${this.lastname} `);
        console.log("Téléphone : " + this.phone)
        this.#adresse.afficher();
        this.creneaux.forEach(creneau => creneau.afficher());
    }


    ajouterAdresse(adresse) {
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

    get adresse() {
        return this.#adresse;
    }
    set adresse(value) {
        this.#adresse = value;
    }
}