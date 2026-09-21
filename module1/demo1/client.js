export class Client {
    #noClient;
    nom;
    prenom;
    adresse;
    dateNaissance;
    noPermis;

    afficherDonneesClient () {
        return `
            Numéro de client : ${this.noClient}, 
            nom : ${this.nom}, 
            prenom : ${this.prenom}, 
            adresse: ${this.adresse}, 
            dateNaissance: ${this.dateNaissance ? this.dateNaissance.toLocaleDateString() : "<inconnu>"}, 
            noPermis: ${this.noPermis}
        `;
    }

    get noClient() {
        return this.#noClient;
    }

    set noClient(value) {
        this.#noClient = value;
    }
}