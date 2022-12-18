const expense=document.getElementById('expenseamount');
const description=document.getElementById('description');
const category=document.getElementById('category');
const form=document.getElementById('form');
form.addEventListener('submit', storeLocal);
//this will store all data to local storage;
let id=1;
function storeLocal(e){
    e.preventDefault();
let details={
expense:expense.value,
description:description.value,
category:category.value

}
localStorage.setItem(expense.value+description.value+category.value,JSON.stringify(details))
showData(details);
}
function showData(details)
{
    const parentNode=document.getElementById('listdetails') 
    const childHTML=`<li id=${details.expense+details.description+details.category}> ${details.expense} - ${details.description} - ${details.category} 
     <button onclick=deleteDetails('${details.expense+details.description+details.category}')>X</button>
    <button onclick=editDetails('${details.expense+details.description+details.category}','${details.expense}','${details.description}','${details.category}')>✎</button></li>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML
    // for clear inputs
    expense.value="";
    description.value="";
}
function deleteDetails(key)
{
    localStorage.removeItem(key)
    removeFromScreen(key)


}
function removeFromScreen(id){
const parentNode=document.getElementById('listdetails');
const childNode=document.getElementById(id)
parentNode.removeChild(childNode)
}
function editDetails(key,ex,des,cat)
{
    expense.value=ex;
    description.value=des;
    category.value=cat;
    deleteDetails(key)
}
window.addEventListener('DOMContentLoaded',()=>{
    const localstorage=localStorage;
    const localStorageKey=Object.keys(localStorage);
    localStorageKey.forEach(key=>{
        const detailsString=localstorage[key];
        const detailsobj=JSON.parse(detailsString);
        showData(detailsobj)

    })
})