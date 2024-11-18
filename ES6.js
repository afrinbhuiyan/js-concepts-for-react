const numbers = [34, 76, 23, 90, 455];
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
// Tamplate String
const about = `
My name is ${student.name}.
age of ${student.age}.
has number ${numbers[3]}.
also like books ${student.books[0]}
`;
console.log(about);

// arrow function 
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const iseven = x => x = x % 2 == 0;
const addTree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum
}

// Create nuw array from an older array and an element
const createElement = [...numbers, 55];

// spread operator
const NewNumber = [...numbers];

numbers.push(65);
numbers.push(65);
numbers.push(65);
numbers.push(56);

console.log(numbers);
console.log(NewNumber);
console.log(createElement);