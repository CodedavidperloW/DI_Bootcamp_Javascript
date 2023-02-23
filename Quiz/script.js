//1. How to access the second element of the array `const nums = [3, 7, 10]`

const nums = [3, 7,10];
console.log(nums[1]);


//2. 2. For the code below, what does `arrNums.splice(2, 0)` return?

    ```javascript
    const arrNums = [1, 2, 3, 4, 5];
    ```
arrNumbs[4,5];


//3.What is the result of the following code :

// ```javascript
// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]

// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers)
// ```

favoriteNumbers = [4, 5, 6, [1,2,3],[7,8,9]];

//4. //What does the following code print to the console?

//const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  
  
//   football.clubs.spain = "Real Madrid";
//   console.log(football.clubs.spain);
//   ```

"Atletico Madrid";

//5.  What does the following code print to the console?
// const myteam = "bestTeam";
   
//    const football = {
//      type: "sport",
//      clubs: {
//        france : "Paris Saint-Germain",
//        spain : "Atlético Madrid",
//      }
//    }  
   
//    football.clubs[myteam] = "France national football team";
//    console.log(football.clubs);
//    ```   
const football = {
         type: "sport",
         clubs: {
           france : "Paris Saint-Germain",
           spain : "Atlético Madrid",
           myteam: "France national football team";
         }
       }  

 //  6. Can we define the function as follows? 
//  If yes, 
//  * what is it called ?
//  * what is this part ?
//      ```
//      function(a, b){
//         return a*b;
//      }
//      ```
//  * explain how to invoke it

 javascript
 const x = function(a, b){
    return a*b;
 }

//  On line 77 This is called variable expression. We are making
//  variable X = to the function that holds two arguments (a,b).
// I don't know how to explain how to invoke it at the moment.


// 7. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

    // ```javascript
    // function x() {
    // 	a = 5;
    // }
    // ```

    //I have learned through the assignments that functions are global.
    //But I can't explain why that is. The above function is called
    // an anyonymous function.


//8.  In JavaScript can we pass functions as arguments to other functions? What does this code return ?

    // ```javascript
    // function sayHello() {
    //    return "Hello, ";
    // }

    // function greeting(helloMessage, name) {
    //   console.log(helloMessage() + name);
    // }

    // greeting(sayHello, "JavaScript!");

    "Hello,() Javascript!"
    //On line 113 I am displayin the function greeting. 
    //It is the only one that was called - see line 111.


//9. Don't know yet

//10.  Don't understand

//11. Which of the following events will you add in the `addEventListener()`method? 
☐ click

//12. Not sure but really want to learn.

//13. Haven't started learning DOM

//14. Do this exercise twice: first with a `for loop`, then with a `for of loop`.
//Console.log the sum of this array

javascript
   const marks = [67, 60, 89, 90, 67, 42];

function letsFindTheSum(){
    let sum =0;
    for(let i=0; i<marks.length;i++){
        sum= sum + marks[i];
    }return sum
}

function letsAlsoFindTheSum(){
    let sum=0;
    for(x of marks){
        /// Not sure how to do for of loop.
    }
}

//15. Not sure

//16. Dont know .fliter
//17-29 Don't know.


