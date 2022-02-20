const fish = {id: 58, name: 'king hilsha', price:9000, phone:'017175555', address:'Chandpur', dress:'silver'};

/* 
const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id;
 */

const {phone, price, dress, id} = fish;
// console.log(phone, price, dress, id)

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
const {work, framework} = company.web;
const {food} = company.ceo;
const{second, third} = company.web.tech;
console.log(work, framework, food, second, third)