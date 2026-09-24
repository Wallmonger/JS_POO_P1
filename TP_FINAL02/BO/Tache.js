export class Tache {

    static Status = {
        Todo: "TODO",
        InProgress: "IN_PROGRESS",
        Done: "DONE",

    }

    static Priorites = {
        Could: 1,
        Should: 2,
        Must: 3,
    }

    constructor(titre, description, type, priorite, statut=Tache.Status.Todo) {
        this.titre = titre;
        this.description = description;
        this.type = type;
        this.statut = statut;
        this.priorite = priorite;
        this.employe = null;
    }

    afficherTache() {
        let prioriteName = Object.keys(Tache.Priorites).find(key => Tache.Priorites[key] === this.priorite);

        return `- ${this.titre}
                description: ${this.description}
                type: ${this.type}
                priorite: ${prioriteName}
                statut: ${this.statut}
                employe: ${this.employe ? this.employe.nom : "Aucun employé assigné"}
        `
    }

    assignerEmploye (employee) {
        if (this.employe === null) {
            this.employe = employee;
            this.employe.ajouterTache(this);
        }
    }

    changerStatut (newStatut) {
        if (this.statut) {
            this.statut = newStatut;
        } else {
            console.error('Unable to changer statut');
        }
    }
}