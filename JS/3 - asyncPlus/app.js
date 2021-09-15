function asyncCallback(callback, parameters) {
  return new Promise(function (resolve, reject) {
  	setTimeout(function() {
    	resolve(callback(...parameters));
  	}, 1000);
  });
}

asyncCallback(function (a, b) {
    return a + b;
}, [2, 5])
.then(function(res) {
    console.log(res);
});