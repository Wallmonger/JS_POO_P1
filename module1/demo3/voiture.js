export class Voiture {

    constructor(numeroSerie, immat, marque, modele, kilometrage, vitesse, vitesseMax, dateMiseEnCirculation, boiteDeVitesse, energie, categorie) {
        this.numeroSerie = numeroSerie;
        this.immat = immat;
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
        this.vitesse = vitesse;
        this.vitesseMax = vitesseMax;
        this.dateMiseEnCirculation = dateMiseEnCirculation;
        this.boiteDeVitesse = boiteDeVitesse;
        this.energie = energie;
        this.categorie = categorie;
    }

    afficherDonneesVoiture () {
        return `
            Immatriculation : ${this.immat}, 
            Marque : ${this.marque}, 
            Modèle : ${this.modele}, 
            Kilometrage: ${this.kilometrage}, 
            Vitesse: ${this.vitesse}, 
            VitesseMax: ${this.vitesseMax},
            DateMiseEnCirculation : ${this.dateMiseEnCirculation ? this.dateMiseEnCirculation.toLocaleDateString() : "<Inconnu>"}, 
            BoiteDeVitesse: ${this.boiteDeVitesse}, 
            Energie: ${this.energie}, 
            Categorie: ${this.categorie}
        `;
    }

    demarrer() {
        if (this.vitesse === 0) {
            console.log("Introduction de la clé");
            console.log("Tourner la clé");
            console.log("La voiture démarre");
        } else {
            console.error("La voiture est déjà en train de rouler");
        }
    };

    accelerer () {
        if (this.vitesse > this.vitesseMax -5 ) {
            console.error("la Voiture a atteint la vitesse maximale");
        } else {
            this.vitesse += 5;
            console.log("La voiture accélère, sa vitesse est de " + this.vitesse + " km/h");
        }
    }
}