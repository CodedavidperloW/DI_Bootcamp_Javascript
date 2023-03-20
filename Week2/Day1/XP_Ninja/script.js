//Ex 2

let question = (prompt("Please type two numbers seperated by a comma"));
let theNumbers = question.split(",")
var theSumOfBothNumbers = Number(theNumbers[0])+Number(theNumbers[1]);
console.log(theSumOfBothNumbers);


//Previous I wrote but I didn't use the split method. 
//let theAnswer = Number(question[0])+Number(question[2]) //// Doesn't make sense to me, why does this work?
// //Shouldn't it be Number(question[0])+Number(question[1])?  But when I write question[1] I get a NaN response.
// console.log(theAnswer);


//Ex 3 Finding Nemo

const askTheUserForSentence = prompt("Write a sentence containing the word Nemo.")
console.log(askTheUserForSentence);
let positionOfNemo = askTheUserForSentence.indexOf("Nemo")
console.log(`I found Nemo at ${positionOfNemo}`)

if (positionOfNemo === -1){
    console.log("I can't find Nemo.")
}


// //Ex 4: Boom
let askForNumber = Number(prompt("Please choose a number"));
console.log(askForNumber);

let boomVariable = "b"+("o".repeat(askForNumber))+"m";

if ( askForNumber < 2){
    console.log("boom")
}

if (askForNumber > 2 ){
    console.log(boomVariable)
}

if (askForNumber%2===0){
    console.log(boomVariable +"!")
} 

if (askForNumber%5===0){
    console.log(boomVariable.toUpperCase());
}

if(askForNumber%2===0 && askForNumber%5===0){
    console.log(boomVariable.toUpperCase()+"!");
}









// let theNumbers = Number(question);
// console.log(theNumbers);
