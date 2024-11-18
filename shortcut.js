// truthy: ' ', 'false', 5, true, [], {}, "hii"
// falsy: '', 0, false, null, undefined
// check truthy
let myVar = 5;
// check any thruthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
};
console.log(myVar)

let myMoney = null;
// you check negative or false anything
if(!myMoney){
    myMoney = 'I am goribs';
}
else{
    myMoney = myMoney - 30;
}
console.log(myMoney);

const money = 800;
let food;
if(money > 100){
    food = "biryani"
}
else{
    food = "cha biscuit"
}

let fruits = money > 200 ? 'drugonFruit' : 'panifol' ;
console.log(fruits);

let drink = (money > 100 && myVar > 100) ? 'cook' : 'filter water';
console.log(drink);

// number to string conversion
const num1 = 50;
console.log(num1)
const numStr = num1 + '';
console.log(typeof numStr);

// string to number
const input = '450';
const inputNum = + input;
console.log(inputNum);

//
let isActive = false;
const showUsar = () => console.log("display Usar");
const showHide = () => console.log("hide usar");
isActive ? showUsar() : showHide();
// use && if the left side is true then right side will be executed 
isActive && showUsar();
// use || if the left side is false then right side will be executed
isActive || showHide();

// toggle boolean
isActive = !isActive;
console.log(isActive)