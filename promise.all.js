function foo() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve();
    }, 3000);
  });
}

function bar() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(bar);
    }, 5000);
  });
}


function cook() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve();
    }, 7000);
  });
}



var start = Date.now();

Promise.all([
  foo(),//1
  bar(),//2
  cook()//3
])
.then(function() {
  console.log('Promise.all', Date.now() - start);
})
.catch(function(error){
  console.log("co loi reject trong Promise.all"+error, Date.now()-start);
})


// promise.all chay theo thu tu 1, 2 trong mang khi gap promise reject se bat loi

// start = Date.now();
// foo()
// .then(bar)
// .then(function(){
//   console.log('chain .then', Date.now() - start);
// });