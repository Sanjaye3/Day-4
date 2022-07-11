var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let result=[];
let result1=[];
if (obj1.length==obj2.length){
  for (x in obj1){
  result.push(x)
}
console.log(result);
for (x in obj2){
result1.push(x)
  }
console.log(result1);
}
let final=result.filter(resultvalue=> !result1.includes(resultvalue));
//console.log(final);
if (final){
  console.log("equal")
}
else {
  console.log("notequal")
}
