const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunkArray(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res;
}

console.log(chunkArray(arr, 3));

function chunkArray(arr, chunkSize) {
  let result = []; 
  for (let i = 0; i < arr.length / chunkSize; i++) {
    result.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return result;
}


console.log(chunkArray(arr, 3))

