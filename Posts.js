const posts = [
    {title:'First Post',body:'This is first promises'},
    {title:'Second Post',body:'This is second promises'}
];
function getPosts(){
    return new Promise((resolve,reject) =>{

        setTimeout(() =>{
            let output = '';
            posts.forEach((post,index) =>{
            output += `<li>${post.title}</li>`;
    
            });
           document.body.innerHTML = output;
    
        },1000);
    });
   
}

  function createPosts(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error : Something went wrong');
            }
            
        },2000);
    });
    
  }


//   createPosts({title:'Post three', body: 'This is post three'})
//   .then(getPosts);

    // async function init(){
    //    await createPosts({title:'Post three', body: 'This is post three'})
    //     .then(getPosts);
      
    //   getPosts();

    // }
    // init();

    // async function init(){
    //     await createPosts({title:'Post Four', body: 'This is post four'})
    //      .then(getPosts);
       
    //    getPosts();
 
    //  }
    //  init();

     function deletePost(){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            if(posts.length >0){
                resolve(posts.pop());
            }
            else{
                reject('Array is empty now');
            }
          },2000);
        });
        
     }
     async function init(){
        await createPosts({title:'Third Post', body: 'This is post three'}),
        await createPosts({title:'Fourth Post', body: 'This is post four'})
        await createPosts({title:'Fifth Post', body: 'This is post five'})
         .then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{
                    getPosts();
                    deletePost().then(()=>{
                        getPosts();
                        deletePost().then(()=>{
                            getPosts();
                            deletePost().then(()=>{
                                getPosts();
                            });
                        });
                    });
                });
            });
         });
         
       getPosts();
     }
     init();
    
 