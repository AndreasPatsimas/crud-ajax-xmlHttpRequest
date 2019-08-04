const http = new httpRequest();

// GET POSTS
// http.get("https://jsonplaceholder.typicode.com/posts", 
// function (error, posts) {
//   if(error){
//     console.log(error);
//   }
//   else{
//     //document.body.innerHTML = posts;
//     console.log(posts);
//   }
  
// });

//GET SINGLE POST
// http.get("https://jsonplaceholder.typicode.com/posts/1", 
// function (error, post) {
//   if(error){
//     console.log(error);
//   }
//   else{
//     //document.body.innerHTML = posts;
//     console.log(post);
//   }
  
// });

const data = {
  title: "Custom post",
  body: "ARIS"
};

// POST

// http.post("https://jsonplaceholder.typicode.com/posts", data, 
//   function(error,post){

//     if(error){
//           console.log(error);
//         }
//         else{
//           //document.body.innerHTML = posts;
//           console.log(post);
//         }

// });

//UPDATE

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, 
//   function(error,post){

//     if(error){
//           console.log(error);
//         }
//         else{
//           //document.body.innerHTML = posts;
//           console.log(post);
//         }

// });


//DELETE

http.delete("https://jsonplaceholder.typicode.com/posts/1", 
function (error, post) {
  if(error){
    console.log(error);
  }
  else{
    //document.body.innerHTML = posts;
    console.log(post);
  }
  
});



