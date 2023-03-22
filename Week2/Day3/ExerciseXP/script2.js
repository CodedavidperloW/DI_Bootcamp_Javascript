//Exercise 1

const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
console.log(people.shift());
console.log(people.pop());
console.log(people.push("David"));
console.log(people[0]);
console.log(people.splice(2,0,"Jason"));
console.log(people.slice(1,3));
console.log(people.indexOf("Foo",0));

//part 2
for(let i=0; i < people.length; i++){
    let individual = people[i];
    if(individual==="Mary"){
        break;
    }
    console.log(individual)
}

//Exercise 2
const myColorArray = ["Blue","Orange","Green","Purple","White"]

for(let i=0; i<myColorArray.length; i++){
    let color = myColorArray[i];
    let currentNumber = 1+i
    console.log(`My #${currentNumber}choice is ${color}`)
}

//Exercise 3
let askForANumber = Number(prompt("Please select a Number"));
///let numericalValue = Number(askForANumber);
while(askForANumber<10){
    askForANumber=Number(prompt("Please select a Number"));
}

//Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
const secondTenant = building.nameOfTenants[1]
console.log(secondTenant);
const numberOfRooms = building.numberOfRoomsAndRent.dan[0];
console.log(numberOfRooms);

const totalRentForDavidAndSarah = building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1];
const rentOfDan = building.numberOfRoomsAndRent.dan[1];
if (totalRentForDavidAndSarah > rentOfDan) {
    newRentForDan= 1200
    console.log(newRentForDan);
}

// //Exercise 5
const myFamily = {name: "David", age:39 , hobby:"Music"};

for(let x in myFamily){
    //console.log([x]);
    console.log([x]);
    // console.log(myFamily.name);
    // console.log(myFamily.age);
    // console.log(myFamily.hobby);
}

for (let x in myFamily){
    console.log([x]);
    console.log(myFamily[x]);
}

//Exercise 6
const details = {
    myNameIs: 'David',
    and: 'I can',
    do: 'THIS'
  }
  for(let x in details){
    console.log(details);
    //console.log(details[x]);
  }

//Exercise 7 Secret Group
let acronym=''
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const sortedNames = names.sort();

//I need to loop the array and get the first letter

for(firstInitial of sortedNames){
    console.log(firstInitial[0])
    acronym= acronym+firstInitial[0];
}
console.log(acronym)



// const newAcronym = acronym.sort()