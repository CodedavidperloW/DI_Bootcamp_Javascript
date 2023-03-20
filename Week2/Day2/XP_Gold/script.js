
//Exercise 1
let whichLanguage = prompt("What languages do you speak?");
let result = whichLanguage.toLowerCase(); //This you want to remember

switch(result){
    case "english": alert("Hello");
        break;
    case "french": alert ("Bonjour");
        break;
    case "hebrew": alert ("Shalom");
        break;
    case "": alert ("01110011 01101111 01110010 01110010"); //Not sure if line 12 is correct.
    default:
       whichLanguage= prompt("What language do you speak?");
}

//Exercise 2
let userGrades = prompt("What is your grade?");
let numericalValue = Number(userGrades);
console.log(numericalValue);

if(numericalValue>90){
    console.log("A");
} else if(numericalValue>80 && numericalValue<=90){
    console.log("B");
}else if(numericalValue>=70 && numericalValue<=80){
    console.log("C")
}else(console.log("D"))

//Exercise 3
let askForAVerb = prompt("Please type a verb")
if(askForAVerb.length >= 3 && !askForAVerb.includes("ing")){
    console.log(askForAVerb+"ing");
}else if(askForAVerb.length >= 3 && askForAVerb.includes("ing")){
    console.log(askForAVerb +"ly");
}else if(askForAVerb.length<3){
    console.log(askForAVerb)
}

