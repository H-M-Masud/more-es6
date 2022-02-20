// declare variable based on the name of an object property
const myObject = {x: 2, y:50, z: 600, a: 25, b:68};
const {x, b} = myObject;
// console.log(x, b)
// console.log('myObject.p'. myObject?.p?.q);

// destructuring array
const [p, q] = [23, 33, 343, 35, 353];
// console.log(p, q)



const [best, faltu] = ['momotaj', 'poroshi'];
// console.log(best, faltu)

const {sky, color, money} = {sky: 'blue', soil:'matti', color:'red', money:500};

// chaining
const company = {
    name: 'GP',
    ceo:{
        id:1,
        name:'ajmo',
        food:'fuchka'
    },
    web:{
        work:'website development',
        employee:22,
        framework:'react',
     tech:{
         first:'html',
        second:'css',
        third:'javascript'}
    }
};

// console.log(company.web.tech.third)
console.log(company?.backend?.tech.third);