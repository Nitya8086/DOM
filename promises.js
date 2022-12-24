const posts = [
    {title:'First Promises',body:'This is first promises'},
    {title:'Second Promises',body:'This is second promises'}
];
function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post,index) =>{
        output += `<li>${post.title}</li>`;

        });
        document.body.innerHTML = output;

    },1000);
}


function create4Posts(post){
    return new Promise((resolve,reject) =>{
       
        setTimeout(() =>{
            posts.push({...post,createAt:new Date().getTime()});
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error Something went wrong')
            }
        },1000); 
    });
}



function createPosts(post){
    return new Promise((resolve,reject) =>{
       
        setTimeout(() =>{
            posts.push({...post,createAt:new Date().getTime()});
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error Something went wrong')
            }
        },2000); 
    });
}
    const user = {
        username :'Nitya patel',
        lastActivityTime : '2nd of september'
    }
    function updateLastActivity(){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                user.lastActivityTime = new Date().getTime();
                resolve(user.lastActivityTime)
            },1000);

        })
    }



    function deletePosts(post){
        return new Promise((resolve,reject) =>{

            setTimeout(() =>{
                
    
                if(posts.length >0){
                    const lastElement = posts.pop();
                    resolve(lastElement);
                }
                else{
                    reject('Array is empty now');
                }
                
            },2000);
        });
    }

    createPosts({title:'Four Promises',body :'This is four post'})
    .then(() => {
        getPosts()
        deletePosts().then(() =>{
            getPosts()
            deletePosts().then(() =>{
                getPosts()
                deletePosts().then(() =>{
                    getPosts()
                    deletePosts().then(() =>{})
                    .catch((err) =>{
                        console.log('Inside catch block',arr)
                    })
                }) .catch((arr) =>{})
            }) .catch((arr) =>{})
        })
    })
    .catch((err)=>console.log(arr))

    

    
    create4Posts({title:'Third Promises',body :'This is third post'})
    .then(() => {
        getPosts()
        deletePosts().then(() =>{
            getPosts()
            deletePosts().then(() =>{
                getPosts()
                deletePosts().then(() =>{
                    getPosts()
                    deletePosts().then(() =>{})
                    .catch((err) =>{
                        console.log('Inside catch block',arr)
                    })
                }) .catch((arr) =>{})
            }) .catch((arr) =>{})
        })
    })
    .catch((err)=>console.log(arr))
    // .catch(err => console.log(err));
    
    // const promises1 = Promise.resolve('Hello World');
    // const promises2 = 10;
    // const promises3 = new Promise((resolve,reject) =>
    //     setTimeout(resolve,2000,'Good Day')
    // );
    // Promise.all([promises1,promises2,promises3]).then(values => console.log(values));
  
    