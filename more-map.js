const friends = ['tom hanks', 'tom cruse', 'tom brady', 'tom solaiman'];

const fLength = friends.map(friend => friend.length);
// console.log(fLength);


const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 1500, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'},
];

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
console.log(productPrices)
// products.map(product => console.log(product))


// forEach
// products.forEach(product => console.log(product));