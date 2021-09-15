const arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

function arrayToObject(arr) {
  let newObject = {};
  
  arr.forEach(function(element) {
    const value = element[1];
    newObject[element[0]] = typeof value === 'object' ? arrayToObject(value) : value;
    return;
  });
  
  return newObject;
}

console.log(arrayToObject(arr));


// Alternative

function arrayToObject(arr) {
  let newObject = Object.fromEntries(arr);
  
  for (key in newObject) {
    if (typeof newObject[key] === 'object') {
    	newObject[key] = arrayToObject(newObject[key]);
    }
  }
  
  return newObject;
}

console.log(arrayToObject(arr));