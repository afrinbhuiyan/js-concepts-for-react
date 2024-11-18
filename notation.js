const person = {
    name: "lal nil holud miya",
    profession: "Trafic surgeon",
    age: 39,
    25: "summer",
    "son-name": "Sunny",
    address: "Shahbag"
};
// dot notation
const prof1 = person.profession;

// Bracket notation
const prof2 = person["profession"];
const pName = "profession";
const prof3 = person[pName];
console.log(prof3);
const sesion = person['25'];
console.log(sesion);
const sonName = person["son-name"];
console.log(sonName)