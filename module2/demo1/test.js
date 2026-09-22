const d1 = new Date();
const d2 = new Date("2025-09-07");
const d3 = new Date(1985, 8, 7);

console.log(d1.toLocaleDateString());
console.log(d2.toLocaleDateString());
console.log(d3.toLocaleDateString());

const jours = ["Dimanche","Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

console.log("Day of d1 = " + d1.getDay());
console.log("Day of d1 based on array = "+jours[d1.getDay()]);

d1.setDate(d1.getDate() + 10);
console.log("Updated date +10 = " + d1.toLocaleDateString());

d1.setMonth(d1.getMonth() + 2);
console.log("Updated month +2 = " + d1.toLocaleDateString());

console.log("Time elapsed in milliseconds : " + Date.parse("1985-09-07"))
console.log("Time elapsed in seconds : " + Date.parse("1985-09-07") / 1000); // To get in seconds instead of milliseconds
console.log(new Date("1985-09-07").getTime()); // Equivalent