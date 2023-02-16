//Exercise 1 Review
const people = ["Greg", "Mary", "Devon", "James"];
//this is an array.
//each element is sitting on a different 
//index.
// console.log(people);
// people.shift();
// //write code to replace james to jason
// people.splice(2,1,"Jason");
// people.push("David");
// people.indexOf("Mary");
// people.indexOf("Mary");
// console.log(people.slice(1,3));
// people.indexOf("Foo");
// const lastValueOfArray = people.length-1;
// console.log(lastValueOfArray);

//Part II
// console.log(people);
// for(let i=0;i<people.length;i++){
//     // console.log(people[i],i);
//     if (people[i] ==="Devon"){break;
//     }
//     console.log(people[i]);
// }
//The i is the variable to tell us where it stands within the loop.
//people.length is how many loops we can do.
// const colors =["red", "orange", "green","blue","pink"];
// const suffixes =["st","nd","rd","th","th"];
//     for(let i=0; i<colors.length; i++){        
//     console.log(`My  #${i+1 + suffixes[i]} favorite color is ${colors[i]}`);
// }


// let question = (prompt("Please pick a number"));
// console.log(Number(question));
// let answer = (Number(question));
// console.log(answer);
// let question = Number(prompt("Please pick a number"));
// while (question < 10){
    //     question = Number(prompt("Please pick a number"));
    //  }
    
// Exercise 3
// let question = Number(prompt("What is my favorite number?"))
// while(question!==26){
//     question = Number(prompt("What is my favorite number?"))
// }

// let favoriteDrink= prompt("What is my favorite drink? 1.Coke 2.Juice 3.Wine 4.Iced Coffee 5.Water");
// while(favoriteDrink!=="4"){
//     favoriteDrink = prompt("What is my favorite drink? 1.Coke 2.Juice 3.Wine 4.Iced Coffee 5.Water");
// }

// let favoriteNumber = prompt("About how many times have I gone to the Kinneret?")
// while(favoriteNumber<20){
//     favoriteNumber= prompt("About how many times have I gone to the Kinneret?")
// }

//Exercise 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building);
// console.log(building.numberOfAptByFloor);
// console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor);
// console.log(building.numberOfRoomsAndRent.dan[0]);
// let sumofSarahDavid = building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1];
// console.log(sumofSarahDavid);
// building.numberOfRoomsAndRent.dan[1];
// let dansRent=building.numberOfRoomsAndRent.dan[1];
// console.log(dansRent);
// if(sumofSarahDavid>dansRent){
//     dansRent = 1200;
// }

// let person = {fname:"John", lname:"Doe", age:25};
// for (let x in person) {
// console.log(x) //fname lname age
// console.log(person[x]) // John Doe 25
// }

// const family={
//     favoriteHolidays:["Purim","Pesach","Shavuos","Yom Atzmauut"],
//     favoriteThingstoDo:{
//         Yonit:["Shop","Dance","Go out"],
//         Ruth:["Sing","Dance","Math","Bake"],
//         Michael:["Tennis","Basketball","Cook","Dance"],
//         Hadar:["Play","Swim","Snuggle"],
//         David:["DJ","Exercise","Travel","Javascript"]
//     },
//     Relatives:["Noam", "Yafit", "Achiya", "Oriel", "Saba Yehuda","Saba Pesach", "Savta Naomi"],
// }

// for(let x in family){
    //     console.log(x);
    //     console.log(family[x]);
    // }
    
    
    // //Exercise 6
    
    // const details = {
    //     my: 'name',
    //     is: 'Rudolf',
    //     the: 'raindeer'
    //   }
    //   console.log(details);
    //   for (let x in details){
    //     console.log(x);
    //     console.log(details[x]);
    //   }

// const details = {
//     my: 'name',
//     is: 'David Perlow',
//     and: "I don't quit"
// }
// for (let x in details){
//    console.log(x);
//     console.log(details[x]);
// }

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
 const listOfNames = names.sort();
// const getTheLetter =names.charAt();
for (let n of listOfNames) {
    console.log(n.charAt(0));
}


// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people);
// people.pop();
// console.log(people);
// people.push("David");
// console.log(people.indexOf("Mary"));

// ///'Mary', 'Devon', 'David'

// people.splice(1,0,"Jason");
// console.log(people);
// //['Mary', 'Jason', 'Devon', 'David']
// people.splice(1,1,"Devon","Jason");
// console.log(people);


// //['Mary', 'Devon', 'Jason', 'Devon', 'David']
// people.splice(3,3,"David");
// console.log(people);

// console.log(people.indexOf("Foo"));
// console.log(people);
// people.indexOf("Foo", 0);

// //Create a variable called last which value is the last element of the array.
// //Hint: What is the relationship between the index of the last element in the 
// //array and the length of the array?

// var last = people.slice(-1);
// console.log(people);

// //Using a loop, iterate through the people 
// //array and console.log each person.
// for(let i=0; i <people.length; i++){
//     console.log(people[i]);
// }

// for(let i=0; i<people.length; i++){
//     if (people[i] === 'Jason'){
//         break;
//     }
//     console.log("The winner is" + i);
// }

// //Exercise 2: Favorite ColorsLoop through the array and as you loop console.log a 
// //string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// const colors =["brown", "green", "yellow", "blue", "black"];
// for (let i=0; i<colors.length; i++){
//     console.log(`My # ${i+1} choice is ${colors[i]}`)}
    
//     // Before I was with Adane I made the loop like this below: 
//     // if (colors[i] === "brown"){
//     //    // continue
//     // }
//     // if (colors[i] === "green"){
//     //     console.log("My #2 choice is "+colors[i]);
//     //     continue
//     // }
//     // if (colors[i] === "yellow"){
//     //     console.log("My #3 choice is "+colors[i]);
//     //     continue
//     // }
//     // if (colors[i] === "blue"){
//     //     console.log("My #4 choice is "+colors[i]);
//     //     continue
//     // }
//     // if (colors[i] === "black"){
//     //     console.log("My #5 choice is "+colors[i]);
//     // }

// // ///Exercise 3: Repeat the Question Prompt the user for a number.
// // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// // While the number is smaller than 10 continue asking the user for a new number.
// // Tip : Which while loop is more relevant for this situation?




// ///Exercise 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building.numberOfAptByFloor);
// building.numberOfAptByFloor['firstFloor']+building.numberOfAptByFloor['thirdFloor'];
// console.log(building.numberOfRoomsAndRent.dan[0]);

// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
// // If it is, than increase Dan’s rent to 1200.


// const sumOfTheRent = building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1];
// console.log(sumOfTheRent);
// const increaseDanRent = building.numberOfRoomsAndRent.dan[1]+200;///HERE I CREATED CODE TO DO THE FORMULA IN +
// //THE IF ...ELSE STATEMENT
// console.log(increaseDanRent);
// if(sumOfTheRent>building.numberOfRoomsAndRent.dan[1]){
//     const increaseDanRent = building.numberOfRoomsAndRent.dan[1]+200;////HERE I ADDED THE CODE, IS THIS CORRECT+
//     ///AND IF SO, WHY? WHY COULD LINE 112 NOT BE ON A LINE EARLIER?
//     console.log(increaseDanRent);
// } else {
//     console.log(building.numberOfRoomsAndRent.dan[1]);
// }







// // Exercise 5
// //Create an object called family with a few key value pairs.
// // Using a for in loop, console.log the keys of the object.
// // Using a for in loop, console.log the values of the object.

// var family = {
//     Last_Name:"Perlow",
//     Address: "10 Sa'ar",
//     Fav_Holday:"Succot",
//     Fav_Vacation:"Mitzpe Ramon",
//     Game:"Restaurant",
// };

// console.log(family);
// for (let x in family){
//     console.log(x);
//     console.log(family[x]);
// }


// //Exercise 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let alphanames = names.sort();
// const initalpha = alphanames.map((alphanames)=> alphanames[0]).join('');
// console.log(initalpha);


// //XP GOLD

// //This is what I wrote below:
// let numbers = [123, 8409, 100053, 333333333, 7]
// for(let i=0; i%3; i="true"){
//     console.log()
// }
// //After lookin on stackoverflow:
// //var numbers = [1,2,3,4,5,6,7,8,9,10]              explanation: here I have a variable which is an array
// // for(var i = 0; i < numbers.length; i++)          explanation: I am now using a for loop. The var i=0  to set the index at 0.. Meaning to count from zero. 


// //{        explanation: I am now using a for loop 
// //     if(i % 3){
// //        console.log(numbers[i]);
// //     }
// // }
// //Explanation:      

// // A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// // Hint: a string is an array of letters
// // Console.log the name of their secret society. The output should be “ABJKPS”
// // const firstIntial = names.map((names)=> names[0]).join('');
// // console.log(firstIntial);
// // console.log(firstIntial.sort());


// // console.log(sortedLetters);
// // firstIntial.sort();
// // console.log(firstIntial);

// // //let names = ["John Doe", "alex Doe", "peter Doe", "Elon Doe"];
// // let sortedNames = names.sort();

// // console.log(sortedNames); // ["Elon Doe","John Doe","alex Doe","peter Doe"]



// // // Animals.
// // const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']
    
// // // Secret Message.
// // const secretMessage = animals.map((animal) => animal[0]).join('')
    
// // // Log.
// // console.log(secretMessage) // "HelloWorld"














