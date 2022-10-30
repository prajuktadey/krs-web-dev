console.log("Nice to meet you!");
console.log("Hello!");

var user_name = "guest user";
console.log(user_name);

//js is a dynamically typed language: it can adapt changes

console.log(typeof user_name);
console.log(typeof 'a');
console.log(typeof 1);
console.log(typeof 1.00);

var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName);

console.log(firstName.length);

console.log(firstName[0])

var url = "https://thenextweb.com/neural";
console.log(url.replace("https://", "www"));

var a = true + true + true * 3;
console.log(a);

var a = 1;
var b = 0;
while (a <= 3)
{
    a++;
    b += a * 2;
    console.log(b);
}