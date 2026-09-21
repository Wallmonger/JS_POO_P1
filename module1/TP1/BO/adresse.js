export class Adresse {
    constructor(mentionsComplementaires, numeroDeVoie, typeDeVoie, nom, codePostal, commune) {
        this.mentionsComplementaires = mentionsComplementaires || null;
        this.numeroDeVoie = numeroDeVoie;
        this.typeDeVoie = typeDeVoie || null;
        this.nom = nom;
        this.codePostal = codePostal;
        this.commune = commune;
    }

    static adresseSansMentions (numeroDeVoie, typeDeVoie , nom, codePostal, commune) {
        return new Adresse(
            "",
            numeroDeVoie,
            typeDeVoie || null,
            nom,
            codePostal,
            commune
        );
    }

    afficher () {
        if (this.mentionsComplementaires) {
            console.log(this.mentionsComplementaires);
        }
        console.log(`${this.numeroDeVoie} ${this.typeDeVoie ?? ""}${this.nom}\n${String(this.codePostal).padEnd(5, "0")} ${this.commune.toUpperCase()}`);

            ;
    }

}