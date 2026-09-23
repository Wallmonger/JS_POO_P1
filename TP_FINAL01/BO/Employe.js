export class Employe {
    constructor(nom, prenom, email, niveau) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.niveau = niveau;
    }

    afficherDetails() {
        return `${this.nom} ${this.prenom} (Email: ${this.email}) Niveau : ${this.niveau}`
    };
}