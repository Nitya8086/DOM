
function saveToLocalStorage(event){
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const phonenumber = event.target.phonenumber.value;

  const users = {
    name ,
    email,phonenumber 

  }
  console.log(users);

  localStorage.setItem(email,JSON.stringify(users));
  
  
  
}

