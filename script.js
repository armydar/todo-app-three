var form = document.getElementById('addForm');
var ul = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addTodo);
ul.addEventListener('click', removeTodo);
filter.addEventListener('keyup', filterTodo)
function addTodo(e){
    e.preventDefault();
    var newTodo = document.getElementById('todoItems').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newTodo));

    var delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete'
    delBtn.appendChild(document.createTextNode('X'))

    li.appendChild(delBtn);

    ul.appendChild(li)
    console.log(li);
    
    
}

function removeTodo(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure you wanna delete?')){
            var li = e.target.parentElement;
            ul.removeChild(li);
        }
    }
}

function filterTodo(e){
    var text = e.target.value.toLowerCase();

    var items = ul.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })

    //console.log(text);
}