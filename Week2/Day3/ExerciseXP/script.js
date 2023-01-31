const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.pop();
console.log(people);
people.push("David");
console.log(people.indexOf("Mary"));

///'Mary', 'Devon', 'David'

people.splice(1,0,"Jason");
console.log(people);
//['Mary', 'Jason', 'Devon', 'David']
people.splice(1,1,"Devon","Jason");
console.log(people);


//['Mary', 'Devon', 'Jason', 'Devon', 'David']
people.splice(3,3,"David");
console.log(people);

console.log(people.indexOf("Foo"));
console.log(people);
people.indexOf("Foo", 0);

//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the 
//array and the length of the array?

var last = people.slice(-1);
console.log(people);

//Using a loop, iterate through the people 
//array and console.log each person.
for(let i=0; i <people.length; i++){
    console.log(people[i]);
}

for(let i=0; i<people.length; i++){
    if (people[i] === 'Jason'){
        break;
    }
    console.log("The winner is" + i);
}

//Exercise 2: Favorite ColorsLoop through the array and as you loop console.log a 
//string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
const colors =["brown", "green", "yellow", "blue", "black"];
for (let i=0; i<colors.length; i++){
    console.log(`My # ${i+1} choice is ${colors[i]}`)}
    
    // Before I was with Adane I made the loop like this below: 
    // if (colors[i] === "brown"){
    //    // continue
    // }
    // if (colors[i] === "green"){
    //     console.log("My #2 choice is "+colors[i]);
    //     continue
    // }
    // if (colors[i] === "yellow"){
    //     console.log("My #3 choice is "+colors[i]);
    //     continue
    // }
    // if (colors[i] === "blue"){
    //     console.log("My #4 choice is "+colors[i]);
    //     continue
    // }
    // if (colors[i] === "black"){
    //     console.log("My #5 choice is "+colors[i]);
    // }

// ///Exercise 3: Repeat the Question Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?




///Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfAptByFloor);
building.numberOfAptByFloor['firstFloor']+building.numberOfAptByFloor['thirdFloor'];
console.log(building.numberOfRoomsAndRent.dan[0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
// If it is, than increase Dan’s rent to 1200.


const sumOfTheRent = building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1];
console.log(sumOfTheRent);
const increaseDanRent = building.numberOfRoomsAndRent.dan[1]+200;///HERE I CREATED CODE TO DO THE FORMULA IN +
//THE IF ...ELSE STATEMENT
console.log(increaseDanRent);
if(sumOfTheRent>building.numberOfRoomsAndRent.dan[1]){
    const increaseDanRent = building.numberOfRoomsAndRent.dan[1]+200;////HERE I ADDED THE CODE, IS THIS CORRECT+
    ///AND IF SO, WHY? WHY COULD LINE 112 NOT BE ON A LINE EARLIER?
    console.log(increaseDanRent);
} else {
    console.log(building.numberOfRoomsAndRent.dan[1]);
}







// Exercise 5
//Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

var family = {
    Last_Name:"Perlow",
    Address: "10 Sa'ar",
    Fav_Holday:"Succot",
    Fav_Vacation:"Mitzpe Ramon",
    Game:"Restaurant",
};

console.log(family);
for (let x in family){
    console.log(x);
    console.log(family[x]);
}

//Exercise 6

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  console.log(details);
  for (let x in details){
    console.log(x);
    console.log(details[x]);
  }

//Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let alphanames = names.sort();
const initalpha = alphanames.map((alphanames)=> alphanames[0]).join('');
console.log(initalpha);

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
// const firstIntial = names.map((names)=> names[0]).join('');
// console.log(firstIntial);
// console.log(firstIntial.sort());


// console.log(sortedLetters);
// firstIntial.sort();
// console.log(firstIntial);

// //let names = ["John Doe", "alex Doe", "peter Doe", "Elon Doe"];
// let sortedNames = names.sort();

// console.log(sortedNames); // ["Elon Doe","John Doe","alex Doe","peter Doe"]



// // Animals.
// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']
    
// // Secret Message.
// const secretMessage = animals.map((animal) => animal[0]).join('')
    
// // Log.
// console.log(secretMessage) // "HelloWorld"














