import {Tache} from "./Tache.js";
import {Employe} from "./Employe.js";
import {Developpeur} from "./Developpeur.js";

export class JeuVideo {
    constructor(titre, genre, plateforme, dateDebut) {
        this.titre = titre;
        this.genre = genre;
        this.plateforme = plateforme;
        this.dateDebut = dateDebut;
        this.taches = [];
        this.employees = [];
    }

    ajouterEmploye(employe) {
        if (employe instanceof Employe) {
            this.employees.push(employe);
        }
    }
    ajouterTache(tache){
        if(tache instanceof Tache){
            this.taches.push(tache);
        }
    }
    afficherEquipe(){
        console.log(`Équipe du projet ${this.titre}`)
        if(this.employees.length > 0) {
            this.employees.forEach(employee => {
                console.log(employee.afficherDetails());
            })
        }
    }
    afficherProjet(){
        console.log(
            `Projet: ${this.titre}\n` +
            `Date: ${this.dateDebut.toLocaleDateString('fr-FR', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})} \n` +
            `Genre: ${this.genre}\n` +
            `Plateforme: ${this.plateforme}\n
        `);
        if(this.taches.length > 0) {
            this.taches.forEach(tache => {
                console.log(tache.afficherTache())
            })
        }
    }

    chercherTachesTodoNoAttribuees() {
        return this.taches.filter(tache => {
            return tache.statut === Tache.Status.Todo && tache.employe === null
        })
    }

    chercherEmployePourTypeTache(typeTache) {
        let tacheSpeciality = Object.keys(Tache.TypesTaches).find(tache => {
            return Object.values(Tache.TypesTaches[tache]).includes(typeTache);
        });

        let firstEmployeeForTask =
            this.employees.find(employee => {
            let employeeType = employee instanceof Developpeur ? "DEVELOPPEUR" : "GRAPHISTE";
            return employeeType === tacheSpeciality;
        })

        return firstEmployeeForTask;

    }

    attribuerTachesTodoNonAttribuees() {
        const list = this.chercherTachesTodoNoAttribuees();
        if (!list || list.length < 1) return;

        list.forEach(task => {
            let goodMatch = this.chercherEmployePourTypeTache(task.type);
            task.assignerEmploye(goodMatch);
        })
    }
}