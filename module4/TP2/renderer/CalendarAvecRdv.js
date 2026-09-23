import {Calendar} from "./Calendar.js";

export class CalendarAvecRdv extends Calendar {
    constructor(datePickerId, calendarId, idDisplay, arrayRdv) {
        super(datePickerId, calendarId);
        this.idDisplay = document.getElementById(idDisplay);
        this.arrayRdv = arrayRdv;
        this.dayPicked = null;


    }

    renderCalendar() {
        super.renderCalendar();
        let cells = document.querySelectorAll('.day-cell');

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                this.dayPicked = cell.innerText;
                this.showRdvForDay(this.dayPicked);

            });
        });




    }

    showRdvForDay(day) {

        if (!day) return;
        if (!this.datePicker.value) return; // TODO: Mettre une valeur de base au formulaire

        let rendezVousList = [];


        let [year, month] = this.datePicker.value.split("-");
        year = parseInt(year);
        month = parseInt(month - 1);
        let dateToVerify = new Date(year, month, day).toLocaleDateString();

        this.arrayRdv.forEach(rdv => {
            let dateRdvArray = rdv.dateRDV.toLocaleDateString();

            if (dateRdvArray === dateToVerify) {
                rendezVousList.push(rdv);
            } else {
                console.log(`NE MARCHENT PAS`);
            }
        })

        this.injectIntoHtml(rendezVousList);

    }

    injectIntoHtml (rdvList) {
        this.idDisplay.innerHTML = "";

        if (rdvList.length === 0) {
            const div = document.createElement("div");
            div.innerText = "Aucun rendez-vous à cette date";
            this.idDisplay.appendChild(div);
            return;
        }

        rdvList.forEach(rdv => {
            const div = document.createElement("div");
            div.innerHTML =  `
                                <h1>Rendez-vous du ${rdv.dateRDV.toLocaleDateString()}</h1>
                                <p>Medecin : ${rdv.creneau.medecin.nom} ${rdv.creneau.medecin.prenom} </p>
                                <p>Patient : ${rdv.patient.nom} ${rdv.patient.prenom}</p>
                                <p>${rdv.creneau.afficher()}</p>
            `;
            this.idDisplay.appendChild(div);
        })

    }

}