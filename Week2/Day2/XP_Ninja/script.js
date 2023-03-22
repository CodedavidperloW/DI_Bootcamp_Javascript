//Exercise 1: Age Difference
let newNumber1= Number(prompt("What year was the first person born?"));
let newNumber2= Number(prompt("What was the year the second person was born?"));

if(newNumber1>newNumber2){
    let halfTheAgeOfTheOlder;
    let differenceInYears;
    differenceInYears= newNumber1-newNumber2;  //// This gives me the difference in years   
    halfTheAgeOfTheOlder = differenceInYears/2 + newNumber2
    console.log(halfTheAgeOfTheOlder)
} else if(newNumber2>newNumber1){
    differenceInYears= newNumber2-newNumber1;    //2000-1984      //16
    halfTheAgeOfTheOlder= differenceInYears/2 + newNumber1;   // 8 + 1984 
    console.log(halfTheAgeOfTheOlder);
}

// let age1 = prompt("What is your age?")
// let age2 = prompt("What is your age?")

// let numericalAge1 = Number(age1)
// let numericalAge2 = Number(age2)

//let newNumber = "1972"
//console.log(newNumber)

// Given the years two people were born, 
//find the date when the younger one is exactly half the age of the older.

//let firstVariable = Number(newNumber1.slice(2))
//let secondVariable = Number(newNumber2.slice(2))

// if(age1>age2){
//     console.log()
// }

// age . slice indexOf.position[][] 


//Exercise 2

let zipCode = prompt("What is your zip code?");
let numericalZip = Number(zipCode);
if (Number(zipCode.length) === 5 && isItOnlyNumbers(zipCode) && !findWhiteSpace(zipCode)){
    console.log("Success");
    console.log(numericalZip);
}else{
    console.log("Error")
}

function isItOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function findWhiteSpace(str){
    return /\s/g.test(str);
}

//Exercise 3


let promptA = prompt("Write down a verb!");

for(let i= 0; i<promptA.length; i++){
    let letterValue
    let itemedLetter = promptA[i];
    if(itemedLetter==="a"){letterValue=1}
    else if(itemedLetter==="e"){letterValue=2}
    else if(itemedLetter==="i"){letterValue=3}
    else if(itemedLetter==="o"){letterValue=4}
    else if(itemedLetter==="u"){letterValue=5}
    else{continue}; //This is something new.
    promptA= promptA.replace(itemedLetter,`${letterValue}`)    //Notice how we use promptA each time
    console.log(promptA);
}



// let newWord = prompt("Please type a word");
// for(let i=0; i <newWord.length; i++){
//         let letterValue
//         let currentLetter = newWord[i];
   
//             if(currentLetter==="a"){letterValue=1}
//             else if(currentLetter==="e"){letterValue=2}
//             else if(currentLetter==="i"){letterValue=3}
//             else if(currentLetter==="o"){letterValue=4}
//             else if(currentLetter==="u"){letterValue=5}
//             else {continue} // this causes it to keep iterating
//             newWord = newWord.replace(currentLetter, `${letterValue}`)
//         console.log(newWord)
//     }
    
    
    
    
    // const replace = {
    //     a:1,
    //     e:2,
    //     i:3,
    //     o:4,
    //     u:5,
    // }
    
    // const givenWord = prompt("Please type a word");
    // const noVowels = givenWord.replace(/[aeiou]/gi,);
    // for(let i=0; i <givenWord.length; i++){
    //     let newWord
    //     let letterValue
    //     let currentLetter = givenWord[i];
    //     if(currentLetter==="a"){letterValue=1};
    //     if(currentLetter==="e"){letterValue=2};
    //     if(currentLetter==="i"){letterValue=3};
    //     if(currentLetter==="o"){letterValue=4};
    //     if(currentLetter==="u"){letterValue=5};    
    //     newWord = noVowels.replace(currentLetter, `${letterValue}`);
    //     console.log(newWord);
    // }