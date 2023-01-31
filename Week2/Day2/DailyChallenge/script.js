var sentence ="The movie is not that bad, I like it.";
var wordNot = "The movie is not that bad, I like it".indexOf("not",0);
console.log(wordNot);//13
var wordBad = "The movie is not that bad, I like it".indexOf("bad",0);
console.log(wordBad);//22

var searchterm = 'not that bad';
const indexOfFirst = sentence.indexOf(searchterm);
console.log(searchterm);

//replace the whole “not…bad” substring with “good”, 
let newsentence = sentence.replace("not that bad","good");
console.log(newsentence);
// above I hard coded and it worked, but now want to do it with a variable(below)
//I don't know what I did wrong.
let mysubstring = sentence.substring(wordNot,wordBad);//Here I made a variable for the substring +
//that I want to replace with the word "good".
console.log(mysubstring);//Here I checked and it worked, it selected 'not that bad'
let replace = "good"; //Here I made a variable for the word I want to replace
let newsentenceB = sentence.replace(searchterm,replace)/////here I am using 'searchterm which I created 
// in line 8 using indexOf to select the substring 'is not that' so that I can replace it with the variable
//"replace",
console.log(newsentenceB);
///!!!!!YES!!!!!!





