var promise = new Promise(function(resolve, reject){
		reject();
});

promise.then(function(){
	console.log("resolve 1");
}, function(){
	console.log("reject 1");
})
.then(function(){
	console.log("ketthuc");
});

//result reject 1 , ketthuc
//.then dung sau .catch chay dc