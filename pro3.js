var promise1 = new Promise(function(resolve, reject){
	resolve();
});

promise1.then(function(){
			return new Promise(function(resolve, reject){
				console.log("promise 2");
				resolve();
			});
		})
		.then(function(){
			return new Promise(function(resolve, reject){
				console.log("promise 3");
				resolve();
			});
		})
		.catch(function(){
			return new Promise(function(resolve, reject){
				console.log("reject1");
					resolve();
			});
		})
		
		.then(function(){
					return new Promise(function(resolve, reject){
						console.log("promise 4");
						var number= 500;
						resolve(number);
					});
				}, function(){
					return new Promise(function(resolve, reject){
						console.log("reject2");
						resolve();
					});
				})
		.catch(function(err){
			console.log("dung lo lang gi ca");
		})
		.then(function(number){
			console.log(number);
		})