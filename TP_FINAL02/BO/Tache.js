export class Tache {

    static status = {
        Todo: "TODO",
        InProgress: "IN_PROGRESS",
        Done: "DONE",

    }

    static priorite = {
        Could: 1,
        Should: 2,
        Must: 3,
    }

    constructor(titre, description, type, priorite, statut=Tache.status.Todo) {
        this.titre = titre;
        this.description = description;
        this.type = type;
        this.statut = statut;
        this.priorite = priorite;
        this.employe = null;
    }

    afficherTache() {
        let prioriteName = Object.keys(Tache.priorite).find(key => Tache.priorite[key] === this.priorite);

        return `- ${this.titre}
                description: ${this.description}
                type: ${this.type}
                priorite: ${prioriteName}
                statut: ${this.statut}
                employe: ${this.employe.nom}
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