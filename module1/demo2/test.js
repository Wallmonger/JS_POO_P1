import {Voiture} from "./voiture.js";
import {Client} from "./client.js";


let voiture = new Voiture();
let client = new Client();

client.nom = "Skywalker";
client.prenom = "Luke";
client.adresse = "145 rue Etoile, Tattoine";
client.noPermis = "123456";
client.dateNaissance = new Date("1961-01-01");
client.noClient = 999999;

voiture.vitesse = 0;
voiture.immat = "12345AZ";
voiture.dateMiseEnCirculation = new Date();
voiture.vitesseMax = 50;
voiture.energie = "Essence";

console.log(voiture.afficherDonneesVoiture());
voiture.demarrer();
voiture.accelerer();
voiture.demarrer();

