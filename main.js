var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//FORM SUBMIT 
form.addEventListener('submit',addItem);

//delete item 
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup',filterItems);

// ADD ITEMS
function addItem(e){
    e.preventDefault();

    // console.log(1);

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    // add class
    li.className = "list-group-item";
    // console.log(li);

    //add text node with input
    li.appendChild(document.createTextNode(newItem));

    //add delete button
    var deleteBtn = document.createElement('button');

    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //creat class
    deleteBtn.appendChild(document.createTextNode('x'));

    var editBtn = document.createElement('button');
    editBtn.className = 'edit float-right ';

    editBtn.appendChild(document.createTextNode('edit'));
   
    //appent button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    //appent li to list



    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are u sure ?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
}
// filter item
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items =  itemList.getElementsByTagName('li');
    // console.log(items);
    //conver to array
    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
   if(itemName.toLocaleLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
   }
   else{
    item.style.display = 'none';
   }


