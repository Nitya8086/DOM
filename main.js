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
     var descriptionNode = document.getElementById('description').value;

    //create new li element
    var li = document.createElement('li');

    // add class
    li.className = "list-group-item";
    // console.log(li);

    //add text node with input
     var description = document.createElement(description);
    li.appendChild(document.createTextNode(descriptionNode));
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


        
      ///show details below in booking code
        const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// // Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);

  
  if(nameInput.value === '' || emailInput.value === '') {
   
  
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

        
