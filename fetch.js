// 1. JSON => stringify, parse

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

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// // 2. fetch
// fetch("url")
// .then(res => res.json())
// .then(data => console.log(data))

// 3. Kays, values
const kays = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [13, 76, 45, 98, 12, 40, 32];
numbers.forEach( num => console.log(num));
numbers.map( num => num * 4);

// for of on array like Object
// loop on an Object using for in

// add or remove from an array
const products = [
    { name: 'laptop', price: 120000, brand: 'lenovo', color: 'silvar'},
    { name: 'phone', price: 100000, brand: 'iphone', color: 'white'},
    { name: 'watch', price: 30000, brand: 'samsung', color: 'orenge'},
    { name: 'pc', price: 26000, brand: 'hikvision', color: 'black'},
    { name: 'camera', price: 90000, brand: 'canon', color: 'gray'}
];

const newProduct = {name:'webcam', price: 34000, brand: 'len', color: "pink"}

// copy products array and then add new product
const newProducts = [...products, newProduct];

// create a new array whithout one specific item
// remove phone means create a new array whithout the phone
const remaining = newProducts.filter(p => p.name !== 'phone');
console.log(remaining);