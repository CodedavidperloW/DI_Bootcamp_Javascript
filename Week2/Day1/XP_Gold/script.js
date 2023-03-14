//Exercise 1

let sentence = ["my","favorite","color","is","blue"];

let comboSentence = sentence.join( );
console.log(comboSentence);


//Exercise 2
let str1 = "mix";
let str2 = "pod";

let str1a= str1.slice(0,2);
console.log(str1a);  /// mi

let str2a= str2.slice(0,2);
console.log(str2a); /// po

let str1b = str1.slice(2,3);
console.log(str1b); /// x

let str2b = str2.slice(2,3);
console.log(str2b); /// d


const newString = `${str2a}${str1b} ${str1a}${str2b}`;
console.log(newString);


//Exercise 3
//Make a Calculator
calculator();

function calculator(){
    let question = prompt("Pick a Number")
    let number = Number(question);
    let question2 = prompt("Pick a second number")
    let number2 = Number(question2);
    let answer = alert(`The answer is: ${number+number2}`)
    console.log(answer);
    return answer
}