import {Tache} from "./Tache.js";

export class Employe {
    static Niveaux = {
        JUNIOR: "Junior",
        SENIOR: "Senior",
    }

    constructor(nom, prenom, email, niveau) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.niveau = niveau;
        this.taches = [];
    }

    afficherDetails() {
        return `${this.nom} ${this.prenom} (Email: ${this.email}) Niveau : ${this.niveau}`
    };

    ajouterTache(tache) {
        this.taches.push(tache);
    }

    trouverTachesParStatut(statut) {
        return (
            this.taches.filter(tache => tache.statut === statut)
        )
    }

    trierTachesParPriorite(taches) {
        return taches.sort((tache1, tache2) => {
            return tache2.priorite - tache1.priorite;
        });
    }

    terminerTachesInProgress() {
        const tachesInProgress = this.trouverTachesParStatut(Tache.status.InProgress);

        if(!tachesInProgress || tachesInProgress.length < 1) {
            return "Aucune tache pour ce statut"
        }
        console.log("____Taches in progress");
        console.log(tachesInProgress);
        const tachesInProgressTri = this.trierTachesParPriorite(tachesInProgress);
        console.log("taches in progress tri")
        console.log(tachesInProgressTri);
    }

}