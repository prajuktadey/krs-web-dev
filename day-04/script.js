//toString()
yearofBirth = 2016;
console.log(yearofBirth.toString() + " is the year I am born.");
console.log(yearofBirth + " is the year I am born.");

//increment operator
mynumber = 1;
mynumber += 5;

//type conversion
var firstNumber = "20";
var secondNumber = "45";
console.log(parseInt(firstNumber) + parseInt(secondNumber));

//comparison operators
20 > 2 //true
20 === 20 //true

//null= object exists but it doesn't exist
//undefined= object exists but we can't do anything with it
var myValue;
console.log(myValue); //undefined

//undefined: it means the value does not exist in the compiler

var temperature = 35;
console.log(temperature);
temperature = null;
console.log(temperature); //the space has name but it has no existence

//arrays
var students = ["Prajukta", "Tim"];
console.log(students.length);

//array operations
//push: add the element
//pop: remove the element
//shift: removes element from the front
//unshift= adds elements to the front

courses = ["HTML", "Python", "CSS"];
courses.push("JS");
console.log(courses);

courses.pop();
console.log(courses);

courses.shift();
console.log(courses);

courses.unshift();
console.log(courses);

console.log(students.slice(0,1));
console.log(students.slice(0,0));
console.log(students.slice(0,2));
console.log(students.slice(0,2));
console.log(students.slice(0, 1));

//objects are lists of elements
var test = {
    'property1': 'Some value',
    '2a': 'Some other value',
    09335: 'Another value',
    'hello-world': 'Last value'
};

//property1 can be retrieved using the dot notation

console.log(test.property1);

console.log(test['hello-world']);


//functions
var student = {
    'firstName': "Marie",
    'lastName' : "Smith",
    'fullName' : function () {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(student.fullName());

//functions help in code reusability
function sum_numbers() {
    var num1 = 5;
    var num2 = 2;
    var sum = num1 + num2;

    console.log(sum);
}

sum_numbers(); //function invoked

function sum_args(num1, num2) {
    var sum =  num1 + num2;
    console.log(sum);
}

sum_args(10, 25);

//return type functions
function hello(num1, num2)
{
    var s = num1 + num2;
    return s;
}

sum_args(2, 3);


//for loops
for (var a = 0; a < 5; a++){
    console.log(a);
}

var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles']
for (var a = 0; a < students.length; a++){
    console.log(students[a]);
}

//ternary
var name = "";
console.log(name ? "The name is " + name : "The name has not been not informed.");

//ternary
var name = "Prajukta";
console.log(name ? "The name is " + name : "The name has not been not informed.");

//this
var gVar = 31; //global

function myFun() {
    var gVar = 200; //local

console.log(gVar);
console.log(this.gVar);
}

myFun();
