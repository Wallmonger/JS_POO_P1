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
            this.taches.filter(tache => tache.statut.toLowerCase() === statut.toLowerCase())
        )
    }



}