const fs = require('fs');


// var data = fs.readFile('./data.txt',(err, data)=>{
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log("readFile success");
// 	}
// });

// console.log(data);

//result : undefine



var pro = new Promise(function(resolve, reject){
	fs.readFile('./data.txt','utf-8', (err, data) => {
		if(err){
			console.log("readFile fail");
			reject(err);
		}else{
			console.log("readFile success");
			resolve(data);
		}
	});
})

 pro.then(function(data){
 	console.log(data);
 })
 .catch(function(err){
 	console.log(err);
 });

// readFile success, nguyenthanh cong
