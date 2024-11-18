const products = [
    { name: 'laptop', price: 120000, brand: 'lenovo', color: 'silvar'},
    { name: 'phone', price: 100000, brand: 'iphone', color: 'white'},
    { name: 'watch', price: 30000, brand: 'samsung', color: 'orenge'},
    { name: 'pc', price: 26000, brand: 'hikvision', color: 'black'},
    { name: 'camera', price: 90000, brand: 'canon', color: 'gray'}
];
const brands = products.map(product => product.brand);
console.log(brands);
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(product => product.price);
console.log(prices);
const colors = products.map(product => product.color);
console.log(colors);

products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.name));
products.forEach((product) => console.log(product.price));

products.forEach( product => {

});

// filter
const cheap = products.filter(product => product.price >= 100000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

const special = products.find(product => product.name.includes('a'));
console.log(special);