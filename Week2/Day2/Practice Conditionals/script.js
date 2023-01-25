alert("good morning!");

//Using if statement//
/*let age = 20

if (age > 18) {
    console.log("You're a big man")
}*/

//Using if else statement --- Remember to always add "" around the value//

/*let age = 19;

if (age > 18) {
    console.log("Eligible")
} else {console.log("Non-Eligible")}*/

/*Make a keyless car!

This car will only let you drive if you are over 18. Make it do the following:

Using prompt() and alert(), ask a user for their age.

IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let age = 17;

if (age === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!")
}
else if (age > 18){
    console.log("Powering On. Enjoy the ride!")
} else {
    console.log ("Sorry, you are too young to drive this car. Powering off")
} 

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4://Expected Outcome
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert("I don't know such values");
}

let a = 2 + 2;

switch (a) {
  case 4: //expected outcome
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

let person ={
    firstName: "David",
    lastName: "Perlow",
};
console.log(person.firstName);
//To Change I use the "=" button//
person.firstName="Yonit"
person.hairColor="brown"
person.stress="high"
console.log(person);
delete person.stress
console.log(person)

Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". Fill those values in with strings.
2. Create an array which contains the object you have made above and name the array "database".
3. Create an array called "newsfeed" which contains 
3 objects with properties "username" and "timeline".
*/
let member ={
    username: "CodedavidperloW",
    password:"youCanDoIt",
}

let database = [member];
console.log(database);

let newsfeed = [
    {
       username:"john",
       password:123
    },
    {
       username:"lise",
       password:124
    },
    {
        username:"david",
        password:125,
    }
    ]







