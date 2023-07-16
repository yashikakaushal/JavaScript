//////// Arrya Method /////////
/* ex-1*/
var students = ['yashika','Ayush','Rajesh','Aruna'];
students.push('FamilySath');
console.log(students);

/* ex-2*/
var students = ['yashika','Ayush','Rajesh','Aruna'];
students_lenght = students.push('FamilySath');
console.log(students_lenght);

/*ex-3*/
var students = ['yashika','Ayush','Rajesh','Aruna'];
students.pop('FamilySath');
console.log(students);

/*ex-4*/
var students = ['yashika','Ayush','Rajesh','Aruna'];
students_last = students.pop('FamilySath');
console.log(students_last);

/*ex-5*/
var cats = ['cat1','cat2','cat3'];
cats.unshift('Ayush');
console.log(cats);

/*ex-6*/
var cats = ['cat1','cat2','cat3'];
cats.shift();
console.log(cats);


/*ex-6*/
console.log(students.indexOf('Akash')); 

/*ex-7*/

var friends = ['Rose','flower','sunflower','Rachel'];
var closeFriends = friends.slice(1,3);
console.log(friends);
console.log(closeFriends);


var otherFriends = friends.slice();
console.log(otherFriends);

//////// Arrya Quiz solution /////////
var books = ['harry potter','Hobbit','Little Prince'];
console.log(books[books.length - 1]);

/*ex-1*/
var films = [
    ['hobbies1','hobbies2','hobbies3'],
    ['martix1','martix2','martix3'],
    ['godFather1','godFather2','godFather3']

]
console.log(films[2][1]);

/*ex-2*/
var films = [
    ['hobbies1','hobbies2','hobbies3'],
    ['martix1','martix2','martix3'],
    ['godFather1','godFather2','godFather3']

]
console.log(films[2][2]);

//////// Arrya Iteration /////////
var books = ['harry potter','Hobbit','Little Prince'];
for(var i = 0; i <books.length; i++)
{
    console.log(books[i]);
}

/* ex-1*/
books.forEach(function(book){
    console.log('Book');
});

/* ex-2*/
books.forEach(function(){
    console.log('myBooks');
});









