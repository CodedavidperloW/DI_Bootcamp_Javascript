
const question = prompt("Please write a few words seperated by commas")
const answer = question
theArray= answer.split(",")

theArray.forEach(log)
function log(word){
    console.log(word)
}

const lengthForBorder=findTheBigWord();
function findTheBigWord(){
    let biggestWordEquals = 0
    for(let i=0;i<theArray.length;i++){
        let individualWord = theArray[i].length;
        if(individualWord>biggestWordEquals){
            biggestWordEquals=individualWord;
        }//console.log(biggestWordEquals);
    }
    return biggestWordEquals;
}

// borderOfStars()
function borderOfStars(){
    let topBottomStars;
    for(let i=0;i<lengthForBorder;i++){
    const star="*";
    topBottomStars=star.repeat(lengthForBorder+2);
}
console.log(topBottomStars);
    // return topBottomStars;
}

function displayWordsWithBorder(){
    for(let i=0;i<theArray.length;i++){
    let eachWord=theArray[i];
    const numberOfSpaceToAdd = lengthForBorder-eachWord.length
    const emptySpaces = " ".repeat(numberOfSpaceToAdd);
    console.log("*" + eachWord + emptySpaces + "*")
}
}

theFinalFrame();
function theFinalFrame(){
    borderOfStars();
    displayWordsWithBorder();
    borderOfStars();
}



















































//         let spaces
//     for(let i=0;i<theArray.length;i++){
//         let emptySpaces=" ".repeat(spaces);
//         spaces = lengthForBorder.length - eachWord.length;
//         console.log("* " + eachWord + emptySpaces + " *")
//     }
// }    

 // function displayWord(word){
                //     const numberOfSpaceToAdd = lengthOfLongestWord - word.length + 1;
                //     const emptySpaces= " ".repeat(numberOfSpaceToAdd);
                //     console.log( "* " + word + emptySpaces + "*");

                // }








//console.log(topAndBottomRowOfStars);

// theTopandBottomRow();
// function theTopandBottomRow(){
//     console.log(topAndBottomRowOfStars);
// }



















// // displayRows();
// // function displayRows(){
// //     const topBottomRowOfStars = createFirstRow();
// //     console.log(topBottomRowOfStars);
// //     for (const word of theArray){
// //         displayWord(word);
// //     }
// //     console.log(topBottomRowOfStars);
// // }

// //makeTopBottomStars();

// // forFun()
// // function forFun(){
//     //     const makingTopBottomStars = makeTopBottomStars();
//     //     console.log(makingTopBottomStars);
    
    
//     //     console.log(makingTopBottomStars);
//     // 
//     //makeTopBottomStars();

//     //findLongestWord();
//     function findLongestWord(){
//         const longestWordinArray= 0;
//         for(let i=0; i<theArray.length; i++){
//             let currentWordIterated = theArray[i].length 
//             if(currentWordIterated>longestWordinArray){
//                 longestWordinArray= currentWordIterated +3;   //7
//             } //console.log(longestWordinArray) 
//         }
//         return longestWordinArray
//     }
    

//     topBottomRowsOfStars()
//     function topBottomRowsOfStars(){
//         let star="*";
//         for(let i=0;i<longestWordinArray.length;i++){
//             console.log(star.repeat(longestWordinArray));
//         }
//     }
    
    
    
    
    // function makeTopBottomStars(){
    //     let star = "*";
    //     const theLongestWord = findLongestWord()
    //     for(let i=0; i<theLongestWord; i++){
    //         console.log(star.repeat(theLongestWord));
    //     }
    // }





// const question= prompt("Please add some words seperated by commas");
// const theArray= question.split(",");

// // theArray.forEach(log)
// // function log(word){
    // //     console.log(word);
    // // }
    // //find the longest word
    
    // const lengthOfLongestWord = getLengthOfLongestWord();// here it is a global variable
    // displayRows();
    // function displayRows(){
        //     const topBottomRowOfStars = createFirstRow();
        //     console.log(topBottomRowOfStars);
        //     for (const word of theArray){
            //         displayWord(word);
            //     }
            //     console.log(topBottomRowOfStars);
            // }
            
            // function displayWord(word){
                //     const numberOfSpaceToAdd = lengthOfLongestWord - word.length + 1;
                //     const emptySpaces= " ".repeat(numberOfSpaceToAdd);
                //     console.log( "* " + word + emptySpaces + "*");
                // }
                
                // function getLengthOfLongestWord(){
                    //     let lengthOfLongestWord=0;
                    //     for( const word of theArray){
                        //         console.log(word);
                        //         const wordLength = word.length;
                        //         if(wordLength>lengthOfLongestWord){
                            //             lengthOfLongestWord=wordLength;
                            //         }
                            //     } return lengthOfLongestWord;
                            // }
                            
                            // function createFirstRow(){
                                // const numberOfStarsOnFirstRow = lengthOfLongestWord + 4;
                                // let row = "";
                                // for(let i=0; i<numberOfStarsOnFirstRow; i++){
                                    //     row= row +"*";
                                    //     } 
                                    //     return row;
                                    // }
                                    
                                    
                                    
                                    
                                    
                                    // function log(word){
                                        //     console.log(word);
                                        // }
                                        // theArray.forEach(log);
                                        
                                        // let lengthOfLongestWord= 0;
                                        // for(word of theArray){
                                            //     console.log(word);
                                            //     const wordLength= word.length;
                                            //     console.log(wordLength);
                                            //     if(wordLength > lengthOfLongestWord){
                                                //         lengthOfLongestWord = wordLength;
                                                //     }
                                                // }
                                                // console.log("The biggest words has", lengthOfLongestWord, "characters")
                                                
                                                
                                                
                                                // function letsMakeStars(){
                                                    //     let biggestword
                                                    //     for(let i=0; i<myArray.length; i++){
                                                        //         biggestword=myArray[i].length;
                                                        //         console.log(biggestword);
                                                        //     }
                                                        // }
                                                        // letsMakeStars();
                                                        

                                                        // function letsMakeTheBorder(){
                                                            //     for(myArray[4])
                                                            // }
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            















































































// const answer = prompt("type a few words seperate by commas");
// const words = answer.split(",");
// console.log(words);

// prompt("Please add several words seperated by commas");

// const myArray = ["Hello", "David", "remember", "you", "won't", "give", "up!"];
// let n = 9;
// let string = "";

// myArray[2].length

// function newFunction() {
//     let bigger = 0
//     for (let i = 0; i < myArray.length; i++) {
//         let current = myArray[i].length;
//         console.log(myArray[i]);
//         if (bigger < current) {
//             bigger = current
//             console.log("is bigger < current.length", bigger, current.length)
//         } else {
//             console.log("no the bigger value is", bigger)
//         }
//     }
//     return bigger
// }


// //to create the frame of the stars
// function elementOfArray(){
//     let bigger2 = newFunction();
//     let space = " ";
//     debugger
//     for(let i=0; i<myArray.length; i++){
//     console.log("*"+ myArray[i]+`${space.repeat(bigger2-myArray[i].length)}`+"*");
// }
// }

// elementOfArray();





// function myStars(myArray) {
//     var border = "";
//     for (i = 0; i < console.log(my); i++) {
//         myArray.forEach(x => console.log(x));
//         border += "*"
//     }
//     return border
// }
// for (let i = 0; i < n; i++) { // external loop
//     for (let j = 0; j < n; j++) { // internal loop
//         if (i === 0 || i === n - 1) {
//             string += "*";
//         }
//         else {
//             if (j === 0 || j === n - 1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//     // newline after each row
//     string += "\n";
// }

// // const inTheMorning= "I need to";
// // const action1= "wake up early";
// // const andThen= "and learn Mishna with a iced coffee";

// // const ideal="Woke up on time";
// // const notIdeal="Woke up late";
// // const actual="Woke up on time";

// // if (ideal !== notIdeal){
// //     alert("! g e t g o i n !")
// // }

// const arrayPractice =[["love","coffee","chocolate","music"],
// ["songs", "dancing", "Torah", "Sunrise"]];

// const arrayPractice2 = ["toys","candy","swimming","trips"]

// console.log(arrayPractice[1][2]);

// const greatThings = arrayPractice.concat(arrayPractice2);
// console.log(greatThings);

// let practiceConstructor = arrayPractice.constructor;
// document.getElementById("demo").innerHTML = text;

// const practiceEntries = arrayPractice2.entries();
// console.log(practiceEntries);

// for (let x of practiceEntries) {
//     document.getElementById("demo").innerHTML += x + "<br>";
//   }
// console.log(x);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(moreFruits[3]);

// const name = "Fear";
// if (name === "David") {
//     alert("Tell your fears to shut it")
// } else {
//     alert("time to pack it up")
// }
// const timeToWakeUp= 5;
// const timeYouWokeUp=5;

// if(timeToWakeUp===timeYouWokeUp){
//     alert("Good Job David")
// }   else {
//     alert("Work Out!")
// }

// const moneyMadeAsTeacher = 8000;
// const moneyYouCanMake = 15000;

// if(moneyMadeAsTeacher===moneyYouCanMake){
//     alert("The Heck with this")
// }   else {
//     alert ("Let's keep pushing")
// }

// const name = "Billy";
// if (name ==="Billy"){
//     alert("hi Billy!");
// }   else if (name === "Susy") {
//     alert("hi Susy!");
// }   else {
//     alert("I don't know you");
// }

