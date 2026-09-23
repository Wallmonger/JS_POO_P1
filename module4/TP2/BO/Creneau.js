import {MedecinGeneraliste} from "./MedecinGeneraliste.js";

export class Creneau {

    constructor(debutCreneau, duree, medecin) {
        this.debutCreneau = debutCreneau;
        this.duree = duree;
        this.medecin = medecin;
        medecin.ajouterCreneau(this);


    }

    afficher() {
        const heureFin = new Date(this.debutCreneau)
        heureFin.setMinutes(heureFin.getMinutes() + this.duree)

        console.log(
            `${this.debutCreneau.toLocaleTimeString()} - ${heureFin.toLocaleTimeString()} (${this.duree} minutes)`
        )

    }




}