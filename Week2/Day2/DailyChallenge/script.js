var sentence ="The movie is not that bad, I like it.";
var wordNot = "The movie is not that bad, I like it".indexOf("not",0);
console.log(wordNot);
var wordBad = "The movie is not that bad, I like it".indexOf("bad",0);
console.log(wordBad);

//replace the whole “not…bad” substring with “good”, 
let newsentence = sentence.replace("not that bad","good");
console.log(newsentence);



