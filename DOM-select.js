//////// Dom select and change //////////

/* ex-1*/
var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';

var isYellow = false;
var bodyElement = document.querySelector('body')

setInterval(function(){
    if(isYellow)
    {
bodyElement.style.background = 'white';
    }
    else{
        bodyElement.style.background = 'yellow';
    }
    isYellow = !isYellow;
},1000);

/* ex-2*/
var selectWithId = document.getElementById('OOKparagraph');
console.log(selectWithId);

var selectWithClass = document.getElementsByClassName('background');
console.log(selectWithClass);
 
var selectWithTag = document.getElementsByTagName('h1');
console.log(selectWithTag);

var selectWithquery = document.querySelector('#ookparagraph');
console.log(selectWithquery);

var selectWithqueryClass = document.querySelector('.background');
console.log(selectWithqueryClass);

var selectWithqueryAllClass = document.querySelector('.background');
console.log(selectWithqueryAllClass);

//////// Dom Method Manipulations //////////



