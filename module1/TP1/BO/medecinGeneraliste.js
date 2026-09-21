export class MedecinGeneraliste {

    nom;
    prenom;
    numeroTelephone;
    static tarif = 25;

    constructor(nom, prenom, numeroTelephone) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroTelephone = numeroTelephone;
    }

    afficher () {
        console.log(`${this.nom.toUpperCase()} ${this.prenom}\nTéléphone : ${this.numeroTelephone}\nTarif: ${MedecinGeneraliste.tarif}€`);
    }
}