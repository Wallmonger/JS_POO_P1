export class Patient {
    constructor(nom, prenom, numeroTelephone, sexe, numeroSecu, dateNaissance, commentaires) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroTelephone = numeroTelephone;
        this.sexe = sexe;
        this.numeroSecu = numeroSecu;
        this.dateNaissance = dateNaissance;
        this.commentaires = commentaires;
    }

    afficher () {
        console.log(
            `${this.nom.toUpperCase()} ${this.prenom} \n`+
            `Téléphone: ${this.numeroTelephone}\n` +
            `Sexe : ${this.sexe === "F" ? "Féminin" : "Masculin"}\n` +
            `Numéro de Sécurité sociale : ${BigInt(this.numeroSecu)}\n`+
            `Date de naissance : ${this.dateNaissance.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}\n`+
            `${this.commentaires || "[Aucun Commentaire]"}`)

    }
}