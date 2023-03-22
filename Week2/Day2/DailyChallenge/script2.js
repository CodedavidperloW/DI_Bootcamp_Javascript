var sentence = "The movie is not that bad, I like it";

var wordNot = sentence.indexOf("not",0);
console.log(wordNot); //13
var wordBad = sentence.indexOf("bad",0);
console.log(wordBad); //22
var notBadPhrase= sentence.slice([13],[25]);

// if(wordBad>wordNot){
// console.log(sentence.replace(notBadPhrase, "good"));
// } else if(wordNot>wordBad){
//     console.log(sentence);
// }

//Here it is with Ternary Operators
(wordBad>wordNot) ? console.log(sentence.replace(notBadPhrase, "good")) : console.log(sentence)


//ternary