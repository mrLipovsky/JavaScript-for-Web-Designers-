// //variables

// var item, 
//     item2;

// item = 5;
// item2 = 'hello';

// //array

// var list = ['john', 'maria', 'lipovsky'],
//     list2 = [],
//     list3 = new Array(12, false);

// //objects 
// var person = new Object(),
//     car = {};

// person.name = 'James';
// person.age = 43;
// person.height = 1.76;
// person.married = true;

// //object change name
// person['name'] = 'Peter'
// person.bike = {};

// person.bike.make = 'Honda'

// var person3 = {
//     name: "Peter",
//     age: "32",
// }

// //Operators 
// var x = y - x;


// //IF ELSE statement 
// var age = 23; 

// if (age > 21) {
//     console.log('Adults')
// } else if ( age < 21) {
//     console.log('Teeneger')
// } else {
//     console.log('Not sure anymore')
// };

// var numberOfCars = 1;

// if (numberOfCars > 1) {
//     console.log('Idiot')
// } else {
//     console.log('Normal person')
// };

// numberOfCars > 1 ? console.log('Such a idiot') : consol.log('Normal person');

// // LOOPS
// // FOR 
// var names = ['Juro','Pavol','Martin'];

// for (var x = 1; x <= 10; x++) {
//     console.log(x);
// }

// for (var y = 0; y < names.length; y++){
//     console.log(names[y]);
// }

// // LOOPS
// // DO WHILE 
// var animals = ['dog', 'cat', 'bird']

// var x = 0; 

// do {
//     console.log(animals[x]);
//     x++;
// } while (x < animals.length);

// do {
//     console.log(x);
// } while (x > 0);

// // LOOPS
// // WHILE
// while (x > 0) {
//     console.log(x);
// }

// //FUNCTIONS

// function printToConsole(message) {
//     console.log(message);
// }

// printToConsole('hello');

// function add(val1, val2) {
//     // console.log(val1 + val2);
//     return val1+val2;
// }

// add(2, 3);
// // console.log(add(2, 3));

// var square = function( number ) {
//     return number + number;
// }

// console.log(square(2));

// var y = 3;

// function test2() {
//     var a = 5;
// }

// function test() {
//     var y = 10;

//     console.log(y);
// }

// console.log(y);

// test();
// test2();

//SELECTORS

console.log(document.body);
console.log(document.images);

//ID
var firstItem = document.getElementById('item-1');
console.log(firstItem);

//CLASS
var secondItem = document.getElementsByClassName('mylist');
console.log(secondItem);

//TAG
var paragraf = document.getElementsByTagName('p');
console.log(paragraf);

//CSS SELECTORS
var images = document.querySelectorAll('img');
console.log(images)

firstItem.style.color = 'red';

secondItem[1].style.display = 'none';

for (var i=0; 
    i<paragraf.length; 
    i++) {
    paragraf[i].style.color = 'green';
}