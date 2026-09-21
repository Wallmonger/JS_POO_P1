export class Client {
    #noClient;

    //Attribut de classe
    static nbClientsCrees = 0;

    constructor(noClient, nom, prenom, adresse, dateNaissance, noPermis) {
        console.log("L'instance de client est crée");
        this.#noClient = noClient;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.dateNaissance = dateNaissance;
        this.noPermis = noPermis;

        Client.ajouterClient();
    }

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

    static ajouterClient () {
        Client.nbClientsCrees++;
    }

    static retirerClient () {
        Client.nbClientsCrees--;
    }

    get noClient() {
        return this.#noClient;
    }

    set noClient(value) {
        this.#noClient = value;
    }
}