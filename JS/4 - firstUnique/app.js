

//var A =  [1, 4, 3, 3, 1, 2, 0, 0]; //returns 4
var A =  [22, 25, 3, 3, 1, 2, 0, 0, 245, 245, 123, 22, 25, 1, 2]; // returns 100
console.log(firstUnique(A))

console.log(firstUnique([1,2,3,2,1,3,4,5,5]))
            
function firstUnique(arr) {
	return arr.find(function(value, idx) {
    return !arr.some(function(value2, idx2) {
      return value === value2 && idx !== idx2;
    });
  });
}
