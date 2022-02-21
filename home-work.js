// task 1: declare an array then use map on array do multiple with each element then result another variable;
const numbers = [3, 4, 5, 3, 6, 7, 8, 3, 2, 8, 9, 3, 4, 5];
const output = [];

numbers.map(number => output.push(number * 5));
// console.log(numbers)
// console.log(output);

// how to find odd number from an array use filter
const oddNumber = numbers.filter(number => number % 2 !=0);
// console.log(oddNumber)

const products = [
    {name:'mobile', company:'Note ten', price: 19000},
    {name:'laptop', company:'Asus', price: 25500},
    {name:'memory', GB:'32GB', price:550},
    {name:'watch', company:'apple', price:5000}
]

const uniquePrice = products.find(product => product.price == 5000);
// console.log(uniquePrice)

// use for each
// numbers.forEach(number => console.log(number))

// use map
// numbers.map(number => console.log(number))

const student = {
    name:'Shakib',
    id:152,
    phone:'018323786578',
    address:'Sitaquenda',
    email:'shakib@gmail.com'
};

const{name, id, phone, address, email} = student;
// console.log(name, id, phone, address, email)

const friends = ['Tuhin', 'Milon', 'liton', 'rohim', 'sogir', 'joshim'];
const [three] =[friends[3]];
// console.log(three)

const threePara = (num1, num2, num3 = 7) => num1 + num2 + num3;
// console.log(threePara(3, 3))

const dividingFive = num => num / 5;
console.log(dividingFive(125))