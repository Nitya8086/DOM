const price = document.getElementById("sellingprice");
const name = document.getElementById("productname");
let totalPrice = 0;
const form = document.getElementById("my-form");
const api =
  "https://crudcrud.com/api/9c41991b5f6b4265862cb0ef358538b3/adminPage";
form.addEventListener("submit", storeCrud);
//this will store all data to local storage;
 async function storeCrud(e) {
  e.preventDefault();
  let details = {
    price: price.value,
    name: name.value
  };
  try{
    await axios
    .post(api, details)
    .then((respone) => {
      showData(respone.data);
    })
  }
  
  catch(e)
  {
      console.log("this is "+e)
  }
}
function showData(details) {
  document.getElementById("sellingprice").value = "";
  document.getElementById("productname").value = "";
  if (localStorage.getItem(details.price) !== null) {
    removeFromScreen(details.price);
  }
  const parentNode = document.getElementById("listdetails");
  const childHTML = `<li id=${details._id}> ${details.price} - ${details.name} 
     <button onclick=deleteDetails('${details._id}')>Delete Product</button> 
    </li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
  let value = parseInt(details.price);
  showTotalPrice(value);
  // for clear inputs
  price.value = "";
  name.value = "";
}
async function deleteDetails(detailsId) {
  decrementPrice(detailsId);
  try{
    await axios
    .delete(`${api}/${detailsId}`)
    .then((respone) => {
      removeFromScreen(detailsId);
    })
  }
  
  catch(e){
    console.log("this is "+e)
  }
}
function removeFromScreen(detailsId) {
  const parentNode = document.getElementById("listdetails");
  const childNodeToBeDeleted = document.getElementById(detailsId);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(api)
    .then((respone) => {
      console.log(respone);

      for (var i = 0; i < respone.data.length; i++) {
        const value = parseInt(respone.data[i].price);
        showData(respone.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
function showTotalPrice(value) {
  totalPrice = totalPrice + value;
  const worth = document.getElementById("totalWorth");
  const worthChild = `<h1 id="totalworth">${totalPrice} </h1>`;
  worth.innerHTML = worthChild;
  if (totalPrice == 0) {
    worth.removeChild(totalworth);
  }
}
function decrementPrice(id) {
  axios.get(`${api}/${id}`).then((res) => {
    let temp = parseInt(res.data.price);
    totalPrice = totalPrice - temp;
    showTotalPrice(0);
  });
}