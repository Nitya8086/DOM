const price=document.getElementById('sellingprice');
const name=document.getElementById('productname');

const form=document.getElementById('my-form');
form.addEventListener('submit', storeLocal);
//this will store all data to local storage;
let id=1;
function storeLocal(e){
    e.preventDefault();
let details={
price:price.value,
name:name.value

}
axios.post("https://crudcrud.com/api/b35394e45ae14d54a585a34316dc6936/adminPage",details)
.then((respone) =>{
    showData(respone.data);
    // console.log(respone);
})
.catch((error) =>{
    console.log(error);
})
// localStorage.setItem(price.value+name.value,JSON.stringify(details))
// showData(details);
}
function showData(details)
{

  document.getElementById('sellingprice').value = '';
  document.getElementById('productname').value = '';

  // console.log(localStorage.getItem(user.emailId))
  if(localStorage.getItem(details.price) !== null){
      removeFromScreen(details.price)
  }

    const parentNode=document.getElementById('listdetails') 
    const childHTML=`<li id=${details._id}> ${details.price} - ${details.name} 
     <button onclick=deleteDetails('${details._id}')>Delete Product</button> 
    </li>` 

    parentNode.innerHTML=parentNode.innerHTML+childHTML
    // for clear inputs
   price.value="";
    name.value="";


}
function deleteDetails(detailsId)
{
    axios.delete(`https://crudcrud.com/api/b35394e45ae14d54a585a34316dc6936/adminPage/${detailsId}`)
    .then((respone) =>{
        removeFromScreen(detailsId)
       
    })
    .catch((error) =>{
        console.log(error);
    })
    // localStorage.removeItem(detailsId)
    // removeFromScreen(detailsId)


}
function removeFromScreen(detailsId){
const parentNode=document.getElementById('listdetails');
const childNodeToBeDeleted=document.getElementById(detailsId)
if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)

}
}


window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/b35394e45ae14d54a585a34316dc6936/adminPage")
    .then((respone)=>{
        console.log(respone);

        for(var i=0; i<respone.data.length; i++){
            showData(respone.data[i]);
        }
    })
    .catch((error) =>{
        console.log(error);
    })
    // const localstorage=localStorage;
    // const localStorageKey=Object.keys(localStorage);
    // localStorageKey.forEach(key=>{
    //     const detailsString=localstorage[key];
    //     const detailsobj=JSON.parse(detailsString);
    //     showData(detailsobj)

    })

// function calculateSubTotal(){

//     let subtotal = 0;
//     let item =  document.getElementById('valueTest');
//     let itemTotal =  document.getElementById('itemTotal');

//     if(typeof item === 'undefined' || item ===null){
//         alert("No Such item - " + "valueTest");

//     }
//     let itemCount = parseFloat(item.value);
//     if(!isNaN(itemCount)){
//         let itemPrice = parseFloat(item.getAttribute('data-price'));

//         if(!isNaN(itemPrice)){
//             subtotal+= itemCount * itemPrice;
//         }
//     }
    
// itemTotal.innerHTML = `£${+subtotal}`;

// }


function calculateSubTotal() {
    let subtotal = 0;
    let itemTotal =  document.getElementById('itemTotal');

    for (var i = 1; i <= itemTotal; i++) {

       let itemID = document.getElementById('valueTest');
        if (typeof itemID === 'undefined' || itemID === null) {
            alert("No such item - " + "valueTest1");
        } else {
            subtotal = subtotal + parseFloat(valueTest.value) * parseFloat(itemID.getAttribute("data-price"));
        }

    }
    console.log(valueTest.value)
    document.getElementById('itemTotal').innerHTML =  subtotal;
}