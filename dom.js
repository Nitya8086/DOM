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






