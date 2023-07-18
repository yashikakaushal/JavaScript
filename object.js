//////// Object  /////////

/*
var student1 = ['shalow','colteach'];
var student2 = ['35','colteach','MIT'];

student1(2);
student2(1);
*/
var schoolName = 'school';

var student = {
    name: 'Shaledom',
    age: 34,
    school:'caltech',
};
/*
console.log(student['name']);
console.log(student.school);
*/

console.log(student[schoolName]);

/* ex-2*/
var schoolName = 'school';

var student = {
    name: 'Shaledom',
    age: 34,
    school:'caltech',
};

console.log(student['name']);
console.log(student.school);

//////// Object update /////////
var Leonnard =
{name: 'Shaledom',
    age: 34,
    school:'caltech',}

    Leonnard.age += 1;
    console.log(Leonnard);


/*ex-2*/    
    Leonnard['school'] ='MIT'
    console.log( Leonnard['school']);

    
universities.forEach(function(university){
    if(university.hasCone === true)
    {
        console.log(university.name + university.year);
    }
    else{
        console.log(university.name);
    }
});
//////// Object method /////////
var Sheldon = {
    name: 'yashika',
    age: 35,
    hasGone: true,
    friends:['penny','raj'],
    say:function(){
        console.log('say hi');
    }
}

Sheldon.say();

var Leonnard = {
    name: 'yashika',
    say: function(){
        console.log('say hi lenoard');
    }
}
Leonnard.say();

function say(){
    console.log('say hi Sheldon');
}
