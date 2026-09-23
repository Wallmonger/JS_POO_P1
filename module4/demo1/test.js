import {Voiture} from "./voiture.js";
import {Client} from "./client.js";
import {Bateau} from "./bateau.js";


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

let bateau = new Bateau(
    "145-024",
    "7888542LV",
    "Titanic",
    "500",
    0,
    125,
    new Date("2025-01-01"),
    "essence",
    "plaisance",
    45.26,
    "monocoque"

)

voiture.proprietaire = client;
console.log("___Details Vehicule____");
console.log(voiture.proprietaire.afficherDonneesClient());
console.log("___Données Voiture____");
console.log(voiture.afficherDonneesVoiture());
console.log("___Details Vehicule____");
console.log(voiture.afficherDetails());
console.log("___Details Bateau____");
console.log(bateau.afficherDetails());



