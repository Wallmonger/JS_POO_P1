import {Voiture} from "./voiture.js";
import {Client} from "./client.js";


let voiture = new Voiture(
    "145-024",
    "7888542LV",
    "Mercedes",
    "SLK",
    100,
    0,
    50,
    new Date(),
    "Manuel",
    "Essence",
    "Cabriolet"
);

let client = new Client(
    "12345",
    "Skywalker",
    "Luke",
    "145 rue Etoile, Tattoine",
    new Date(),
    "5555555"
);

console.log(client.afficherDonneesClient());
console.log(voiture.afficherDonneesVoiture());

/*
client.nom = "Skywalker";
client.prenom = "Luke";
client.adresse = "145 rue Etoile, Tattoine";
client.noPermis = "123456";
client.dateNaissance = new Date("1961-01-01");
client.noClient = 999999;
*/

/*voiture.vitesse = 0;
voiture.immat = "12345AZ";
voiture.dateMiseEnCirculation = new Date();
voiture.vitesseMax = 50;
voiture.energie = "Essence";
voiture.marque = "Mercedes";
voiture.modele = "SLK";
voiture.kilometrage = 100;
voiture.categorie = "Cabriolet";
voiture.boiteDeVitesse = "Manuel";

console.log(voiture.afficherDonneesVoiture());
voiture.demarrer();
voiture.accelerer();
voiture.demarrer();*/

