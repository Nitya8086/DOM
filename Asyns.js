console.log('Person1 : Show Ticket');
console.log('Person2 : Show Ticket');

const preMovie = async() =>{

const promiseWifeBringigTickets = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('Ticket');
    },3000);

});

 const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
 const addButter = new Promise((resolve,reject) => resolve(`butter`));
 const getColdDrink = new Promise((resolve,reject) => resolve(`coldDrink`));

  let ticket =  await promiseWifeBringigTickets;



  
    console.log(`Wife : I have the ${ticket}`);
    console.log('Husband : We should go in');
    console.log('Wife : No i am hungry');

    let popcorn = await getPopcorn;

    console.log(`Husband : I have some ${popcorn} `);
    console.log('Husband : We should go in');
    console.log('Wife :  No,I need Butter on my popcorn');

    let Butter = await getPopcorn;

    console.log(`Husband :  I have butter on ${Butter}`);
    console.log('Husband : We should go in');
    console.log('Wife :  No,I want colddrink ');

    let coldDrink = await getColdDrink;

    console.log(`Husband :  I have  ${coldDrink}`);
    console.log(`Husband :  Anything else darling`);
    console.log(`Wife : No, Lets got we are getting late`);
    console.log(`Husbank : Thank you for reminder *grins`);


    
  return ticket;
}

preMovie().then((m) => { console.log(`Person3 : Show ${m}`)
console.log('Ok Go insinde');
});

console.log('Person4 : Show Ticket');
console.log('Person5 : Show Ticket');






// console.log('Person1 : Show Ticket');
// console.log('Person2 : Show Ticket');

// const preMovie = async() =>{

// const promiseWifeBringigTickets = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         reject('Ticket');
//     },3000);

// });

// let ticket;
// try{
//     ticket =  await promiseWifeBringigTickets;

// }catch(e){
//      ticket = 'Sad face';
// }

// return ticket;
// }

// preMovie().then((m) => { console.log(`Person3 : Show ${m}`)
// console.log('Not Allowed to go inside without');
// });

// console.log('Person4 : Show Ticket');
// console.log('Person5 : Show Ticket');



