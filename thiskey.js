
//////// Keys method //////////
console.log(this);
function addNumber(x,y){
    console.log(x + y);
    console.log(this);
}
addNumber(10,20);

/*ex-1*/
var Raj={
    name:'raj',
    year:1989,
    sayHi: function()
    {
        console.log(this);
        console.log('sayHi' + this.name);

        function somefunc(){
            console.log(this);
        }
        somefunc();
    }
};
Raj.sayHi();
