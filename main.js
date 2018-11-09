 //console.log(document.dir)
//<div id="main" class="card card-body"> ... this is the parentNode/parentElement
//console.log(id.childnodes) PS .children is better to use as this ignores linebreak.
//(id.firstchild) PS firstElementChild is better to use
//(lastchild.id) PS lastElementChild is better
//(nextSibling) nextElementSibling
//(previousSibling) previousElementSibling

//create div
newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hi';
newDiv.setAttribute('title', 'holla');

var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container')
var h2 = document.querySelector('header h2');

//console.log(newDiv);

container.insertBefore(newDiv, h2);

var button = document.getElementById('button');
var todo = document.getElementById('todo');
var input = document.querySelector('input');
var item = document.getElementById('item');

//var todoItem = input.value;
console.log(input.value);

button.addEventListener('click', buttonClick);

function buttonClick(){
    button.style.background ='red';
    todo.innerHTML = 'right';
    item.appendChild('todoItem');

}
