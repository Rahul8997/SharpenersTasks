//ANSWER 1:create a promise as per the youtuber does
const posts = [
  { title: "Post one", body: "This is post one", lastactivitytime: new Date() },
  { title: "Post two", body: "This is post two", lastactivitytime: new Date() },
];

function getPost() {
  let output = "";
  setTimeout(() => {
    for (let i = 0; i < posts.length; i++) {
      output += `<li>${posts[i].title} post last updated at ${posts[i].lastactivitytime}</li>`;
    }
    document.body.innerHTML = output;
  }, 2000);
}

function createPost(post) {
  updateLastUserActivityTime(post);
  // updateLastUserActivityTime();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:something went wrong");
      }
    }, 1500);
  });
}

createPost({
  title: "Post three",
  body: "This is post three",
  lastactivitytime: new Date(),
})
  .then(getPost)
  .catch((error) => console.log(error));

//ANSWER 2 & 3:
//2)Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). Everytime you call it, it should delete the last element of the array
//3)Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now. You dont have to use for loop as there are only 3 posts  Just call delete post 3 times
//delete post function
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (posts.length > 0) {
        posts.pop();
        resolve();
      } else {
        reject("Array is empty now");
      }
    }, 1500);
  });
}

//   deletePost().then(getPost).catch((error)=>console.log(error)).then(deletePost).then(getPost).catch((error)=>console.log(error)).then(deletePost).then(getPost).catch((error)=>console.log(error)).then(deletePost).then(getPost).catch((error)=>console.log(error));

//ANSWER 4:Try creating a post (post four) and once the post is created, call delete post after 1 second and delete post 4 .how would you do it. Write the code.
createPost({
  title: "Post four",
  body: "This is post four",
  lastactivitytime: new Date(),
})
  .then(getPost)
  .catch((error) => console.log(error));

setTimeout(() => {
  deletePost()
    .then(getPost)
    .catch((error) => console.log(error));
}, 1000);

//Promise all
const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "GoodBye");
});

//   Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

function updateLastUserActivityTime(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // post.lastactivitytime=new Date();
      resolve();
    }, 500);
  });
}

Promise.all([createPost(), updateLastUserActivityTime()]).then(
  posts.forEach((element) => {
    console.log(element);
  })
);

deletePost()
  .then(getPost)
  .catch((error) => console.log(error));
for (let i = 0; i < posts.length; i++) {
  console.log(posts[i]);
}


// Why on Earth do we need promise.all ?
// Promise.all is actually a promise that takes an array of promises as an input (an iterable). 
// Then it gets resolved when all the promises get resolved or any one of them gets rejected.


// Write a short answer on callback vs promises
// . A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future.
//  In JavaScript, a promise is an object and we use the promise constructor to initialize a promise. 