
export class Calendar {
    constructor(datePicker, calendarDiv) {

        this.datePicker = document.getElementById(datePicker);
        this.calendarDiv = document.getElementById(calendarDiv);

        this.datePicker.addEventListener("input", () => this.renderCalendar());

        this.renderCalendar();
    }

    generateCalendar(year, month) {
        console.log(year, month);
        this.calendarDiv.innerHTML = '';
        this.renderTableHeader();

        const firstDayDate = new Date(year, month - 1, 1);
        const firstDay = firstDayDate.getDay();
        const firstDayIndex = firstDay === 0 ? 6 : firstDay - 1;


        const lastDay = new Date(year, month, 0).getDate();

        let arrayOfDays = [];
        for (let i = 1; i <= lastDay; i++) {
            arrayOfDays.push(i);
        }

        this.renderDays(arrayOfDays, firstDayIndex);





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


    renderDays (arrayOfDays, firstDayIndex) {
        for (let i = 0; i < firstDayIndex ; i++) {
            const div = document.createElement("div");
            div.className = "empty-cell";
            this.calendarDiv.appendChild(div);
        }

        arrayOfDays.forEach(dayOfMonth => {
            const div = document.createElement("div");
            div.className = "day-cell";
            div.innerText = dayOfMonth;
            this.calendarDiv.appendChild(div);
        })
    }


}
