const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
  ];
function getPosts(){
    setTimeout(() =>{
        let output='';
        posts.forEach((post, index) => {
            output +=`<li>${post.title}</li>`;

        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post) {
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
      posts.push(post);
      
      const error=false;

      if(!error){
        resolve();
      }
      else{
        reject('Error:something went wrong');
      }
    }, 2000);
});
}
const user={
    username:'kpr',
    lastActivityTime:'19th october'
}

function updateLastActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            user.lastActivityTime=new Date().getTime();
            resolve(user.lastActivityTime)
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(posts.length>0){
                const lastelement=posts.pop
                resolve(lastelement);
            
                }
                else{
                    reject('Array is empty now')
                }
            },1000)
        });

}

createPost({title:'Post Three',body:'This is post three'})
.then(() => {
getPosts()
deletePost().then((deletedElement) =>{
    console.log(deletedElement)
    getPost();
    deletePost().then(() =>{
        getPost()
        deletePost().then(() => {})
        .catch((err) => {
        
            console.log('Inside catch block',err)
        })
    }).catch((err) => {})
}).catch((err) => {})
})
.catch(err => console.log(err))

// promises.all

const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject) =>
setTimeout(resolve,2000,'Good Bye')
);
const promise4=fetch('https://jsonplaceholder.typicode.com/users');
Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));
