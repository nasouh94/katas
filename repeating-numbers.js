let repeatNumbers = function(data) {
  let output = ""
  
  for (let arr of data){
    output += arr[0].toString().repeat(arr[1]) + ", ";
  }
  return output
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));