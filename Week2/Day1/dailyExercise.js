const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(fruits);
fruits.splice(0,1);
fruits.sort();
fruits.push("Kiwi");
fruits.shift();
fruits.reverse();


const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits)
const oranges = moreFruits[2];
console.log(oranges);

