function removeVowels(str){
let vowels=['a','e','i','o','u','A','E','I','O','U'];
return str.split('')
          .filter(char => !vowels.includes(char))
          .join('')
}
const str1="Hello World";
console.log(removeVowels(str1))