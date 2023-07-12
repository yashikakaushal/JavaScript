/* loop*/
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

/* while loop*/
var number = 1;
while(number <= 11)
{
    console.log(number);
    number += 2;
}

/* while loop solution-1*/
var number = 132;
while(number <= 148){
    console.log(number);
    number += 2;
}

/* while loop solution-2*/
var number = 132;
while(number <= 148){
    document.write(number);
    number += 2;
}

/* while loop solution-3*/
var number = 132;
while(number <= 148){
  if(number % 2 === 0)
  {
    console.log(number);
  }
  number++;
}

/* while loop solution-4*/
console.log("number divisible by 7");
var count = 25;
while(count <= 100){
  if(count % 7 === 0)
  {
    console.log(count);
  }
  count++;
}

/* while loop solution-5*/
console.log("number divisible by 5");
var count = 25;
while(count <= 100){
  if(count % 5 === 0)
  {
    console.log(count);
  }
  count++;
}

/*  for loop solution-6*/
for (var number =1; number < 11; number++){
    console.log(number);
}

/*  for loop solution-7*/
for(var i = 132; i <= 148; i++)
{
    if(i % 2!== 0)
    {
        console.log(i);
    }
}
/*  for loop solution-8 ans=35,70*/
for(var i = 25; i <= 100; i++)
{
    if((i % 7 === 0) && (i% 5 === 0 ))
    {
        console.log(i);
    }
}

/*  continue and break */

console.log('break statement');
for (var i =1; i <=10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

/* ex-2*/
console.log('break statement');
for (var i =1; i <=10; i++){
    if(i % 2 === 0){
        console.log(i);
        break;
    }
}

/* ex-1*/
console.log('continue statement');
for (var i =1; i <=10; i++){
    if(i % 2 !== 0) continue;
    console.log(i);
}
