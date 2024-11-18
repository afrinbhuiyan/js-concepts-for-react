const numbers = [23, 89];
// const x = numbers[0];
// const y = numbers[1];
// console.log(y, x)
// const [z, n] = [12, 89];
// console.log(z, n);
const [x, y] = numbers;
console.log(x, y);

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
// const [frist, second] = [234, 455];
const [frist, second] = boxify(34, 765);
console.log(boxify(78, 32))

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

// const [fristBook, secondBook] = ['English', 'Math']
const [fristBook, secondBook] = student.books;

// Object Destructuring 
// const {name, age} = {name: "Afrin", age: 15};
const {name, age} = {id: 14, name: "Afrin", salary: 43500000, age: 15};

const emplee = {
    id: "VS Code",
    designationn: "developer",
    machine: "mac",
    languages: ["html", "css", "js"],
    specification: {
        hight: 56,
        weight: 45,
        address: "kumarkhali",
        drink: "water",
        watch: {
            color: "black",
            price: 3000,
            brand: "garmin"
        }
    }
};

const {machine, id} = emplee;
const {hight, weight} = emplee.specification;
const {brand} = emplee?.specification?.watch;