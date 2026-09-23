export class Tache {
    constructor(titre, description, type, priorite, statut="Todo") {
        this.titre = titre;
        this.description = description;
        this.type = type;
        this.statut = statut;
        this.priorite = priorite;

    }

    afficherTache() {
        return `- ${this.titre}
                description: ${this.description}
                type: ${this.type}
                priorite: ${this.priorite}
                statut: ${this.statut}
        `
    }
}