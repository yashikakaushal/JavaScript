//////// Function /////////
function sayHello(){
    console.log('Hello World');
}

sayHello();

/* ex-1*/
/*
console.log('hello world');
console.log('goodbye world');
console.log('how are you');

console.log('hello world');
console.log('goodbye world');
console.log('how are you');

console.log('hello world');
console.log('goodbye world');
console.log('how are you');

console.log('hello world');
console.log('goodbye world');
console.log('how are you');
*/


/* ex-2*/
function doSomething(){
console.log('hello world');
console.log('goodbye world');
console.log('how are you');
}
doSomething();
doSomething();
doSomething();

/* ex-3*/
/*
function doSomething(){
    console.log('hello world');
    console.log('goodbye world');
    console.log('how are you');
    }
    doSomething();
    
*/

//////// Function with argument /////////
/* ex-1*/
function sayHi(name){
    console.log('Hi' + ' ' + name);
}
sayHi('yashika');
sayHi('Ayush');

/* ex-2*/
function cube(number){
    console.log(number * number * number);
}
cube(3);
cube(23);

/* ex-3*/
function bmi(length,weight){
console.log(weight /(length * length));
}
bmi(2,4);


/* ex-4*/
function test(circle){
console.log(circle + circle);
}
test(4);



/* ex-5*/
/*
function checkUserInfo(email,password){
    if (2){
     console.log(email ,password);
    }
}
*/

//////// Function return /////////
function cube(number){

return (number * number * number);
}
console.log(cube(4));

/* ex-2*/
function cube(number){
    
    return (number * number * number);
    }
    var num = cube(5);
    console.log(num);
    
/* ex-3*/
function cube(number)
{
if(number === 25)
  {
    return 25;
  }
    return (number * number * number);
    }
    var num = cube(5);
    console.log(num);
    
/* ex-4*/
function cube(number)
{
if(number === 25)
  {
    return 25;
  }
    return (number * number * number);
    }
    var num = cube(25);
    console.log('This is a another console',num);
    
    
/* ex-5*/
/*
function cube(number)
{
if(number === 25)
  {
    return;
  }
    return (number * number * number);
    }
    var num = cube(25);
    console.log('This is a another console',num);
    */

/* ex-6*/
function calculateAge(birthyear)
{
    return 2020 - birthyear;
}
var age = calculateAge(1992);

console.log('This is a age',age);

/* ex-7*/
function enterCafe(Age){
    if(Age < 18){
        return 'you can not enter cafe';
    }
    return 'you can enter cafe';
}
var cafe = enterCafe(17);
console.log(cafe);

//////// Function declaration and expression /////////
    