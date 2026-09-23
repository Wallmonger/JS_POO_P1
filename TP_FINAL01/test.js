import {JeuVideo} from "./BO/JeuVideo.js";
import {Tache} from "./BO/Tache.js";
import {Employe} from "./BO/Employe.js";

let jeu = new JeuVideo("ENI", "Réflexion", "PC", new Date(Date.now()));

jeu.ajouterTache(new Tache("Regle 12", "Créer les questions chances", "Programmation_Gameplay", "Could"));
jeu.ajouterTache(new Tache("La blibliothèque", "Déplacer le joueur dans la blibliothèque", "Animation", "Should"));
jeu.ajouterTache(new Tache("Erreur 567", "Impossible de répondre à la question", "Debogage ", "Must"));

let dev1 = new Employe("Haut","Paul","paulhaut@enijeu.fr","Junior");
let graphiste1 = new Employe("Claire","Marie","marieclaire@enijeu.fr","Senior");

jeu.ajouterEmploye(dev1);
jeu.ajouterEmploye(graphiste1);

console.info("\n -- EQUIPE --");
jeu.afficherEquipe();
console.info("\n -- PROJET --");
jeu.afficherProjet();
//