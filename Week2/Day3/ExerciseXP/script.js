const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
console.log(people);
people.push("David");
let posUppercaseMary = people.indexOf("Mary");
console.log(posUppercaseMary);
people.pop();
people.shift();
people.indexOf("Foo",0);

/*Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the 
array and the length of the array?*/

/*First Attempt
last = [people(-1)];
console.log(last);
*/
let last = people.slice(-1);




