function deepEqual (var1, var2) {
	return JSON.stringify(var1) === JSON.stringify(var2);
}


// Alternative

var deepEqual2 = function (x, y) {
  if (x === y) {
    return true;
  }
  
  if (typeof x !== "object" || typeof y !== "object") {
    return false;
  }
  
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  }

  for (let prop in x) {
    if (!y.hasOwnProperty(prop) || !deepEqual2(x[prop], y[prop])) {  
      return false;
    }
  }
  
  return true;
}

var a = [{name: 'test'}, {age:23}]
var b = [{name: 'test'}, {age:23}]

console.log(deepEqual(a, b))
console.log(deepEqual2(a, b))