
export class Calendar {
    constructor(datePicker, calendarDiv) {

        this.datePicker = document.getElementById(datePicker);
        this.calendarDiv = document.getElementById(calendarDiv);

        this.datePicker.addEventListener("input", () => this.renderCalendar());

        this.renderCalendar();
    }

    generateCalendar(year, month) {

        this.calendarDiv.innerHTML = '';
        this.renderTableHeader();

        // -1 car les mois sont de 0 à 11
        const firstDayDate = new Date(year, month - 1, 1);
        const firstDay = firstDayDate.getDay();
        const firstDayIndex = firstDay === 0 ? 6 : firstDay - 1;

        // Date 0 car les jours commencent à 1 ( il va donc chercher le dernier du mois précédent)
        const lastDay = new Date(year, month, 0).getDate();
        this.renderDays(lastDay, firstDayIndex);

    }

    // Has to be called on constructor
    renderCalendar() {

        const date = this.datePicker.value ? new Date(this.datePicker.value) : new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        this.generateCalendar(year, month);

    };


    renderTableHeader () {
        let weekDays = ["L", "Ma", "Me", "J", "V", "S", "D"];
        weekDays.forEach((dayOfWeek) => {
            const div = document.createElement("div");
            div.className = "day-header";
            div.innerText = dayOfWeek;
            this.calendarDiv.appendChild(div);
        });
    }


    renderDays (numberOfDays, firstDayIndex) {
        for (let i = 0; i < firstDayIndex ; i++) {
            const div = document.createElement("div");
            div.className = "empty-cell";
            this.calendarDiv.appendChild(div);
        }

        for (let i = 1; i < numberOfDays; i++ ) {
            const div = document.createElement("div");
            div.className = "day-cell";
            div.innerText = i;
            this.calendarDiv.appendChild(div);
        }
    }


}
