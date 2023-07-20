//////// Event /////////

var button = document.querySelector('#btn1');
var title = document.querySelector('#oktitle');

button.addEventListener('click', function(){
    console.log('you clicked the button');
    title.style.backgroundColor = 'red';
});

//////// Event handler link-color /////////
/*ex-1*/
var ListParent = document.querySelector('ul');

ListParent.addEventListener('click',function(){
    console.log('you clicked the ul');
    ListParent.style.backgroundColor = 'blue';
});

/*ex-2*/
var ListParent = document.querySelector('ul');

ListParent.addEventListener('click',function(event){
    console.log('you clicked the ul');
    event.style.backgroundColor = 'blue';
});

//////// quiz sol /////////
var ListItems = document.querySelector('li');
console.log('ListItems',ListItems);

for (var i = 0;i < ListItems.length; i++);
{
    ListItems[i].addEventListener('click', function (){
        this.style.color = 'white';
    })
}

//////// callback function /////////
var OOKparagraph = document.querySelector('#ookparagraph');

function toggleBackground(){
    OOKparagraph.classList.toggle('toggleBackground');
}

OOKparagraph.addEventListener('click',toggleBackground);

//////// Different Event Types /////////
//////// todolist quiz sol doubt /////////
var firstTodoItem = document.querySelector('.todoItem');
firstTodoItem.addEventListener('mouseover',function (){
    firstTodoItem.style.backgroundColor ='blue';
    firstTodoItem.style.color ='white';
});
firstTodoItem.addEventListener('mouseout',function(){
    firstTodoItem.style.backgroundColor ='white';
    firstTodoItem.style.color ='black';
})

/*ex-1*/
var todolistItem = document.querySelector('.todoItem');
{
for(var i = 0; i < todolistItem.length; i++)
{
    todolistItem [i].addEventListener('mouseover',function(){
        this.style.backgroundColor ='blue'
        this.style.Color ='white'
 });
}

 todolistItem[i].addEventListener('mouseout',function(){
    this.style.backgroundColor ='white'
    this.style.Color ='black'
 })
 todolistItem[i].addEventListener('click',function(){
    this.classList.add('okay');
 })
}

