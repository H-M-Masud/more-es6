// 1. let and const
const hubby = "Omor Snai";
let phone = "iphone 15";
phone = ' samsung galaxy s17';

// 2. default parameter
function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
};
const biggest = maxNumber();
// console.log(biggest)

// template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`

// 4. arrow function
const square = x => x*x;
console.log(square(8))