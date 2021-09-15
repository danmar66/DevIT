const obj = {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
};

function objectToArray(obj) {
	newArray = Object.entries(obj);
  
  return newArray.map(function(element) {
    if (typeof element[1] !== 'object') {
    	return element;
    }
    
    return [element[0], objectToArray(element[1])];
  });
}

console.log(objectToArray(obj));