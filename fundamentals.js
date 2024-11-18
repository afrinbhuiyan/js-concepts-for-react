// How to declare a veriable using let and const
const fatherName = 'Akter';
let season = 'rainy';
season = 'sammar';

// 6 basic conditions = >, <, ===, !==, <=, >=
// mutiplay conditions = &&, ||
if(fatherName === 'akter' || 'rainy'){

}
else if(fatherName === 'Akter'){

}
else{

}

// Array declare 
// index
// length, push
const numbers = [34, 76, 23, 90, 455];
numbers[0];
numbers[3] = 34;

// for loop
for(let i = 0; i < numbers.length ; i++){
    const number = numbers[i];
    console.log(number)
}

// function 
function mutiplay(num1, num2){
    const results = num1 * num2;
    return results 
}
const output = mutiplay(12, 78);
console.log(output);

// Object
// 3 ways to access property by name
const student = {
    name: "Alifa",
    age: 17,
    class: "ten",
    result: 5.14,
    books: [
        'English',
        'Math'
    ]
};
const myVariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']); // acccess via property name access
console.log(student[myVariable]); // access via property name in a variable