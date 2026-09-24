import {JeuVideo} from "./BO/JeuVideo.js";
import {Tache} from "./BO/Tache.js";
import {Employe} from "./BO/Employe.js";

let jeu = new JeuVideo("ENI", "Réflexion", "PC", new Date(Date.now()));

let dev1 = new Employe("Haut", "Paul", "paulhaut@enijeu.fr", Employe.Niveaux.JUNIOR);
let graphiste1 = new Employe("Claire", "Marie", "marieclaire@enijeu.fr", Employe.Niveaux.SENIOR);

jeu.ajouterEmploye(dev1);
jeu.ajouterEmploye(graphiste1);



let tache1 = new Tache("Regle 12", "Créer les questions chances", "Programmation_Gameplay", "Could", "Todo");
let tache2 = new Tache("Regle 3", "Créer les questions chances", "Programmation_Gameplay", "Should", "InProgress");
let tache3 = new Tache("Regle 14", "Créer les questions chances", "Programmation_Gameplay", "Must", "Done");

let tache4 = new Tache("Regle 1478", "Créer les questions chances", "Programmation_Gameplay", "Could", "Done");

tache1.assignerEmploye(dev1);
tache2.assignerEmploye(dev1);
tache3.assignerEmploye(dev1);
tache4.assignerEmploye(dev1);

jeu.ajouterTache(tache1);
jeu.ajouterTache(tache2);
jeu.ajouterTache(tache3);
console.log("SEARCH TEST __________________________")

console.log("TEST TRI PAR PRIORITE __________________________________")

console.log(dev1.trierTachesParPriorite(dev1.taches));


