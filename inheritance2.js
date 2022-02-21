// function Person(){
//     this.name = "Twinkle cats"
// }

// function Teacher(){
//     Person.call(this)
//     this.subject = "javascript"
// }

// var teacher = new Teacher();
// var name = teacher.name;
// console.log(name)

function Person(name){
    this.name = name;
}

Person.prototype.printName = function(){
    console.log('name' + this.name)
}
Person.prototype.another = function(){
    console.log('This is an another function');
}

function Student(name, id){
    Person.call(this, name);
    this.id = id;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var student = new Student('Shegufa tarangum', 1660);
console.log(student)