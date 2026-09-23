export class Vehicule {

    #proprietaire;

    constructor(numeroSerie, immat, marque, modele, vitesse, vitesseMax, dateMiseEnCirculation, energie, categorie) {
        this.numeroSerie = numeroSerie;
        this.immat = immat;
        this.marque = marque;
        this.modele = modele;
        this.vitesse = vitesse;
        this.vitesseMax = vitesseMax;
        this.dateMiseEnCirculation = dateMiseEnCirculation;

        this.energie = energie;
        this.categorie = categorie;
    }

    afficherDetails() {
        return `
            Immatriculation : ${this.immat}, 
            Marque : ${this.marque}, 
            Modèle : ${this.modele}, 
            Vitesse: ${this.vitesse}, 
            VitesseMax: ${this.vitesseMax},
            DateMiseEnCirculation : ${this.dateMiseEnCirculation ? this.dateMiseEnCirculation.toLocaleDateString() : "<Inconnu>"},  
            Energie: ${this.energie}, 
            Categorie: ${this.categorie},
        `;
    }

    demarrer() {
        if (this.vitesse === 0) {
            console.log("Introduction de la clé");
            console.log("Tourner la clé");
            console.log("La véhicule démarre");
        } else {
            console.error("La véhicule est déjà en train de rouler");
        }
    };

    accelerer () {
        if (this.vitesse > this.vitesseMax -5 ) {
            console.error("la véhicule a atteint la vitesse maximale");
        } else {
            this.vitesse += 5;
            console.log("La véhicule accélère, sa vitesse est de " + this.vitesse + " km/h");
        }
    }

    get proprietaire() {
        return this.#proprietaire;
    }
    set proprietaire(value) {
        this.#proprietaire = value;
        // value.ajouterVoiture(this);
    }
}