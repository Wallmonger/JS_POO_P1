import {Tache} from "./Tache.js";

export class Employe {
    static Niveaux = {
        JUNIOR: "Junior",
        SENIOR: "Senior",
        EXPERT: "Expert",
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
        tache.employe = this;
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

    travaillerTachesTodo () {
        const tachesTodo = this.trouverTachesParStatut(Tache.Status.Todo);

        if(!tachesTodo || tachesTodo.length < 1) {
            return "Aucune Tache Todo";
        }
        const tachesTodoTri = this.trierTachesParPriorite(tachesTodo);

        tachesTodoTri.forEach(tache => {
            tache.changerStatut(Tache.Status.InProgress);
            console.log(
                `${tache.employe.prenom} travaille sur la tâche : ${tache.titre}\n` +
                `${tache.statut === Tache.Status.InProgress ? "Tâche arrêtée pour aujourd'hui" : "En Cours"}\n` +
                tache.afficherTache()
            )
        })

        // return tachesTodoTri;

    }

    terminerTachesInProgress() {
        const tachesInProgress = this.trouverTachesParStatut(Tache.Status.InProgress);

        if(!tachesInProgress || tachesInProgress.length < 1) {
            return "Aucune tache pour ce statut"
        }
        const tachesInProgressTri = this.trierTachesParPriorite(tachesInProgress);

        // Set every statut to done
        tachesInProgressTri.forEach((tache) => {
            tache.changerStatut(Tache.Status.Done);

            console.log(
                `${tache.employe.prenom} travaille sur la tâche : ${tache.titre}\n` +
                `${tache.statut === Tache.Status.Done ? "Tâche terminée" : "En Cours"}\n` +
                tache.afficherTache()
            )
        });


        // return tachesInProgressTri;
    }

    travailler() {
        console.log(`-- ${this.prenom} gère ses tâches IN PROGRESS --`);
        this.terminerTachesInProgress();
        console.log(`-- ${this.prenom}  gère ses tâches TODO --`)
        this.travaillerTachesTodo();
        console.log(`${this.nom} a fini de travailler`);
    }
}