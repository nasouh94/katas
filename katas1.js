function sumLargestNumbers(data) {

  data.sort((a, b) => a - b);
  var empty = [];
  
  for (var i = data.length-2; i <= ((data.length)-1); i++){
  empty.push(data[i]);
  }
  
  return empty[0]+empty[1];
  }
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))
