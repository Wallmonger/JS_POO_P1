import {JeuVideo} from "./BO/JeuVideo.js";
import {Tache} from "./BO/Tache.js";
import {Employe} from "./BO/Employe.js";

let jeu = new JeuVideo("ENI", "Réflexion", "PC", new Date(Date.now()));

let dev1 = new Employe("Haut", "Paul", "paulhaut@enijeu.fr", Employe.Niveaux.JUNIOR);
let graphiste1 = new Employe("Claire", "Marie", "marieclaire@enijeu.fr", Employe.Niveaux.SENIOR);

jeu.ajouterEmploye(dev1);
jeu.ajouterEmploye(graphiste1);



let tache1 = new Tache("Regle 12", "Créer les questions chances", "Programmation_Gameplay", "Could", "Todo");
let tache2 = new Tache("Regle 3", "Créer les questions chances", "Programmation_Gameplay", "Could", "InProgress");
let tache3 = new Tache("Regle 14", "Créer les questions chances", "Programmation_Gameplay", "Could", "Done");

tache1.assignerEmploye(dev1);
tache2.assignerEmploye(graphiste1);
tache3.assignerEmploye(dev1);

jeu.ajouterTache(tache1);
jeu.ajouterTache(tache2);
jeu.ajouterTache(tache3);
console.log("SEARCH TEST __________________________")
console.log(dev1.trouverTachesParStatut(Tache.status.Done))

console.log("TEST TRI PAR PRIORITE __________________________________")



