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
    "12345678"
);

let client2 = new Client(
    "67785",
    "Laborde",
    "Catherine",
    "148 rue des trucs, Paris",
    new Date(),

);


client.ajouterVoiture(voiture);

console.log(voiture.proprietaire.afficherDonneesClient());



