/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

/* Variablen und Konstante */

let firstName,age;
const youngster = ["1","2","3","4","5"];
const kids = ["6","7","8","9","10","11","12"];
const teens = ["13","14","15","16","17"];

/* Eingaben */

firstName = prompt("Bitte Vornamen eingeben; ");
age = prompt("Bitte Alter eingeben: ");

/* Abfragen und Ausgaben */

if (youngster.includes(age))
        console.log(firstName + " trinkt Milch.");
        else if (kids.includes(age))
        console.log(firstName + " trinkt Saft.");
        else if (teens.includes(age))
        console.log(firstName + " trinkt Cola.");
        else console.log(firstName + " trinkt Wein.");
