class Support{
    name;
    designation = 'Support Web Dev';
    address = "BD";
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

const amir = new Support('Aamir khan', 'BD');
const salman = new Support('Solaiman khan', 'Dubai');
const sharuk = new Support('SRK khan', 'Dubai');
const skshay = new Support('Akshay Kumar');
amir.startSession();
salman.startSession();
// console.log(amir)
// console.log(salman)