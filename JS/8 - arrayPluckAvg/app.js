let testData3 = [
    {
      "name":"Vasya",
      "email":"vasya@example.com",
      "age":20,
      "skills":{
        "php":0,
        "js":-1,
        "madness":10,
        "rage":10
      }
    },
    {
      "name":"Dima",
      "email":"dima@example.com",
      "age":34,
      "skills":{
        "php":5,
        "js":7,
        "madness":3,
        "rage":2
      }
    },
    {
      "name":"Colya",
      "email":"colya@example.com",
      "age":46,
      "skills":{
        "php":8,
        "js":-2,
        "madness":1,
        "rage":4
      }
    },
    {
      "name":"Misha",
      "email":"misha@example.com",
      "age":16,
      "skills":{
        "php":6,
        "js":6,
        "madness":5,
        "rage":2
      }
    },
    {
      "name":"Ashan",
      "email":"ashan@example.com",
      "age":99,
      "skills":{
        "php":0,
        "js":10,
        "madness":10,
        "rage":1
      }
    },
    {
      "name":"Rafshan",
      "email":"rafshan@example.com",
      "age":11,
      "skills":{
        "php":0,
        "js":0,
        "madness":0,
        "rage":10
      }
    }
  ];


function arrayPluckAvg(arr, field) {
	const fieldPath = field.split('.');
  let sum = 0;
  
  arr.forEach(function(element) {
    let value = element;
    fieldPath.forEach(function(key) {
      value = value[key];
    });
    
    sum += value;
  });
  
  return (sum / arr.length).toFixed(2);
  
}


console.log(arrayPluckAvg(testData3, 'skills.php'));