const numberOfVowels = function(data) {
  const vowels = "aeiou";
  let vowelsCount = 0;

  for (var i = 0; i < data.length; i++){
    if(vowels.indexOf(data[i])!== -1){
      vowelsCount +=1;
    }
  }
  return vowelsCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));