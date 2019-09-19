const urlEncode = function(text) {
  // Put your solution here
for(var i = 0 ;i < text.length ;i++){
  
  return encodeURI(text.trim())
  
}
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));