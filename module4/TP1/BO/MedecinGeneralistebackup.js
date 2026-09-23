import {Adresse} from "./Adresse.js";

export class MedecinGeneraliste {
    #adresse;
    static TARIF = 25;
    static MAX_CRENEAUX = 15;


    constructor(lastname, firstname, phone, adresse) {
        this.lastname = lastname.toUpperCase();
        this.firstname = firstname;
        this.formatPhoneNumber(phone);
        this.ajouterAdresse(adresse);
        this.creneaux = [];
    }

    afficher () {
        console.log(
            `${this.lastname.toUpperCase()} ${this.firstname}\n` +
            `Téléphone : ${this.phone}\n` +
            `Tarif : ${MedecinGeneraliste.TARIF}€`

        )

        if(this.#adresse) {
            this.#adresse.afficher();
        } else {
            console.log("\n")
        }

        if(this.creneaux.length > 0){
            console.log("Créneaux :");
            this.creneaux.forEach(creneau => creneau.afficher());
        }
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

        if (this.creneaux.length > MedecinGeneraliste.MAX_CRENEAUX -1) {
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