class TeamMember{
    name;
    address = "BD";
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
   
}

class Support extends TeamMember{
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember{
    buildARoutine(Student){
        console.log(this.name, 'Build a routine for', Student);
    }
   
}
class NeptuneApp extends TeamMember{
    codeEditor;
    constructor(name, address, editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app version', version);
    }
   
}


const amir = new Support('Aamir khan', 'BD', 11);
const salman = new Support('Solaiman khan', 'Dubai', 3);
const sharuk = new Support('SRK khan', 'Dubai', 5);
const skshay = new Support('Akshay Kumar',);

const alia = new StudentCare('Alia Bhatt', "Mumbai");
const ash = new NeptuneApp('Ash', 'Mumbai', 'android studio')
ash.releaseApp('5.534');
console.log(ash)