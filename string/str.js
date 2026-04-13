let fullName = "Ikraan Abdiqani \n"; //\n is a escape character that creates a new line.
// \t is a escape character that creates a tab space.
// console.log(fullName.indexOf("n"));
// console.log(fullName.lastIndexOf("a"));
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.concat(" is my name "));
// console.log (fullName+ " is my friend"+ " and i love her");
// console.log (fullName.length);
// console.log(fullName.charAt(7));
// console.log(fullName.slice(4, 8));
// console.log(fullName.endsWith("ni"))
// console.log(fullName.startsWith("Ik"));

let sentence = "I am learning JavaScript and I am loving  loving loving it";
//  let text = /LOving/gi; // g is for global search, it will find all occurrences of the word "loving" in the sentence
// //gi is for ignore case, it will find all occurrences of the word "loving" in the sentence regardless of the case
//regular expresion is a away of searching for a specific pattern in a string. It is a powerful tool for finding and manipulating strings. In this example, we are using a regular expression to find all occurrences of the word "loving" in the sentence, regardless of the case. The match() method will return an array of all the matches found in the sentence.
// console.log(sentence.match(text));
// console.log(sentence.includes("learning"));
// if(sentence.includes("learning")){
//     console.log("The sentence contains the word 'learning'");
// }
// else{
//     console.log("The sentence does not contain the word 'learning'");
// }

// console.log(fullName.repeat(10)); // repeat the string 10 times
console.log(sentence.substring(2, 5));
console.log(sentence.substring(2, sentence.length));
