// getARandomNumber()
// function getARandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 100);
//     console.log(randomNumber)
//     for (let i = 0; i < randomNumber; i++) {
//         let specificNumber = i;
//         if (specificNumber % 2 === 0) {
//             console.log(specificNumber)
//         }
//     }

// }



// //Exercise 2
// let newStringEx
// const myString = "tryittillyousucceed"
// function newString(stringEx){
//     newStringEx = stringEx.split("")
//     for(let i=0;i<newStringEx.length;i++){
//         let individualLetter = newStringEx[i]
//         if(individualLetter%2===0){
//             console.log(individualLetter)
//         }
//     }
// }
// newString(myString)

//Exercise 2 ---- Could not Complete----
const myString = "tryittillyousucceed"
function capitalizeEvenNumber(str) {
    splitTheString = str.split('');
    let evenLetters = str;
    let oddLetters = str;
    for (let i = 0; i < splitTheString.length; i++) {
        let letter = splitTheString[i];
        if (i % 2 === 0) {
           evenLetters= evenLetters.replace(letter, letter.toUpperCase());
        } else {
           oddLetters= oddLetters.replace(letter, letter.toUpperCase());
        } console.log([evenLetters, oddLetters]);
    }
}
capitalizeEvenNumber(myString);

// capitalizeEvenNumber(myString)



// function capitalLetters(string) {
//     let newString = string.split("");
//     console.log(newString);
//     for (let i = 0; i < newString.length; i++) {
//         if (i % 2 === 0) {
//             let evenLettersBlank = [];
//             evenLetters = newString[i].toUpperCase();
//             evenLettersArr = evenLetters.split();
//            console.log(evenLettersArr.push(evenLettersBlank));
//         } else if (i % 2 !== 0) {
//             let oddLettersBlank= [];
//             oddLetters = newString[i].toLowerCase();
//             oddLettersArr = oddLetters.split();
//            console.log(oddLettersArr.push(oddLettersBlank));
//         }
//     }  //  let combination = evenLettersArr.concat(oddLettersArr)
//    // console.log(combination)
// }


//Exercise 3 -- Checking for a Palindrome
// let car = "racecar"

// function reverse(str){
// let rev_str = "";
// for(let i = str.length-1; i>=0; i--){

// rev_str+=str[i];
// }
// return rev_str;
// }

// function isThisAPalindrome(str){

// reverse_str = reverse(str);

// if(reverse_str === str){
//     console.log("passed")
// } else {
//     console.log("failed")
// }
// }

// isThisAPalindrome(car)




















// function checkingForPalindrome(arrayC) {
//     let j = arrayC.length - 1;
//     for (let i = 0; i < j; i++) {
//         let x = arrayC[i];
//         let y = arrayC[j - 1];
//         if (x != y) {
//             return false;
//         }
//     }
//     return true;
// }
// debugger
// function isItAPalindrome(arrayC){
// let ans = checkingForPalindrome(arrayC);
// if( ans == true){
//     console.log(`${arrayC} is a palindrome.`);
// }
// else{
//     console.log(`${arrayC} is not a palindrome.`);
// }
// }

// isItAPalindrome(car)


//Exercise 4 -- Biggest Number
// const array = [-1, 0, 3, 100, 99, 2, 99];
// function findBiggestNumber(theArray){
// console.log(Math.max(...theArray))
// }
// findBiggestNumber(array)

//Exercise 5
// const list=[1,2,3,3,3,3,4,5]

// function endDuplicates(arrayB){
// let withoutDuplicates = [...new Set(arrayB)]
// console.log(withoutDuplicates)
// }
// endDuplicates(list)
