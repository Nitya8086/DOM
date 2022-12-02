// console.dir(document);
// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[15]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

//GET element by id//

// console.log(document.getElementById('header-title'));
// console.log(document.getElementById('main-header'));
// var hearderTitle= document.getElementById('header-title');
// var hearder= document.getElementById('main-header');
// console.log(hearderTitle);

// hearderTitle.textContent = 'Hello';
// hearderTitle.innerText= 'Good bye';

// console.log(hearderTitle.innerText);

// hearderTitle.innerHTML = '<h3>Nitya</h3>';
// hearder.style.borderBottom = 'solid 3px black';

//GET ITEMS BY CLASS NAME;


items[1].style.backgroundColor = '#f4f4f4';

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[3]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

li[1].style.backgroundColor = '#f4f4f4';

for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[3]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';
items[2].style.display = 'none';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length;i++){
   
    odd[i].style.backgroundColor = 'green';
}

TRANSVERSING THE DOM

var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

var itemList = document.querySelector('#items');
console.log(itemList.childNodes);
console.log(itemList.children);

var itemList = document.querySelector('#items');
console.log(itemList.lastElementChild);

var itemList = document.querySelector('#items');
console.log(itemList.lastChild);

var itemList = document.querySelector('#items');
console.log(itemList.firstElementChild);

var itemList = document.querySelector('#items');
console.log(itemList.firstChild);
itemList.firstChild.textContent = 'ladli';

nextsibling //

var itemList = document.querySelector('#items');
console.log(itemList.nextSibling);

var itemList = document.querySelector('#items');
console.log(itemList.nextElementSibling);

privous sibling

var itemList = document.querySelector('#items');
console.log(itemList.previousSibling);

var itemList = document.querySelector('#items');
console.log(itemList.previousElementSibling);

//creat element

//creat a div

var newDiv = document.createElement('div');
//add class
newDiv.className = 'Hello';
//add id
newDiv.id = 'hello1';
//add attribute
newDiv.setAttribute('title','hello div');

//creat textnode

var newDivText = document.createTextNode('Hello Dom');

//appent child node

newDiv.appendChild(newDivText);
var node  = document.createElement("li");

var textnode = document.createTextNode('Item 5');
node.appendChild(textnode);

console.log(node);

var newDivText = document.createTextNode('Hello ');

//appent child node

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv , h1);









