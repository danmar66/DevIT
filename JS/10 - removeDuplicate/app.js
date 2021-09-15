var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"

x = Array.from(new Set(x.split(','))).toString();

console.log(x);