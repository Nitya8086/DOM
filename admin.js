const price = document.getElementById("sellingprice");
const name = document.getElementById("productname");
let totalPrice = 0;
const form = document.getElementById("my-form");
const api =
  "https://crudcrud.com/api/5c154f077de74c9e80e908d8dd6b1271/adminPage";
form.addEventListener("submit", storeLocal);
//this will store all data to local storage;
function storeLocal(e) {
  e.preventDefault();
  let details = {
    price: price.value,
    name: name.value,
  };
  axios
    .post(api, details)
    .then((respone) => {
      showData(respone.data);
    })
    .catch((error) => {
      console.log(error);
    });
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
function deleteDetails(detailsId) {
  decrementPrice(detailsId);
  axios
    .delete(`${api}/${detailsId}`)
    .then((respone) => {
      removeFromScreen(detailsId);
    })
    .catch((error) => {
      console.log(error);
    });
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
