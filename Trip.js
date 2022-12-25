function JobForm(){
    return new Promise((resolve,reject) =>{
       setTimeout(() =>{
        resolve('Fill the form');
       },1000); 
    })
}

function registration(){
    return new Promise((resolve,reject) =>{
       setTimeout(() =>{
        resolve('Apply for registration');
       },2000); 
    })
}

function submitForm(){
    return new Promise((resolve,reject) =>{
       setTimeout(() =>{
        resolve('Submit the form');
       },3000); 
    },1000);

}
JobForm().then((msg)=>{
    console.log(msg);
  registration().then((msg2)=>{
        console.log(msg2);
        submitForm().then((msg3) =>{
            console.log(msg3);
            console.log('Your registration is sucessfully done');
        });
    });
});



