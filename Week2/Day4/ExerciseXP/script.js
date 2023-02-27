//Test - 2 Hours

// function infoAboutMe(){
//     console.log("My name is David, I am 38 and I love music.")
// }
// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(`Your name is ${personName} you are ${personAge} and your favorite color is ${personFavoriteColor}.`)
// }

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// function calculateTip(){
//     const answer=prompt("What is your bill?")
//     const totalBill = Number(answer);
//     let sum
//     if (totalBill<50){
//         sum=totalBill*1.20;
//     } else if (totalBill>=50 && totalBill<=200){
//         sum=totalBill*1.15;
//     } else (sum=totalBill *1.10)
//     console.log(sum);
//     }

// calculateTip();


// function isDivisible(){
//     let sum=0
//     for(let i=0; i<500; i++){
//         if(i%23===0){
//         console.log(i);
//         sum=sum+=i 
//         console.log(sum);
//     }
// }
// }
// isDivisible(500);

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ["banana","orange","apple",];

// function myBill(){
// let total=0
// let item
// for(let i=0; i<shoppingList.length;i++){
//     item = shoppingList[i];
//     if(item in stock){
//     if(stock[item]>0){
//        total=total+=(prices[item]);
//        stock[item]=stock[item]-1;
//        console.log(total);
//     } else (console.log(`Sorry we don't have ${item} today.`))
// }
// }
// }
// myBill()


// changeEnough(4.25, [25, 20, 5, 0]);

// function changeEnough(itemPrice, amountOfChange){
//     const theSum = theAmountOfChange(amountOfChange)    
//     if(theSum>itemPrice){
//             console.log("You can buy it!")
//             return true
//         } else (console.log("Now isn't a good time."))
//         return false
// }

// function theAmountOfChange(arr){
//     let sum= 0
//     let coinTotalValue
//     for(let i=0;i<arr.length;i++){
//         const amountOfCoins = arr[i];
//         if(i===0){coinTotalValue=0.25}
//         if(i===1){coinTotalValue=0.10}
//         if(i===2){coinTotalValue=0.05}
//         if(i===3){coinTotalValue=0.01}
//         sum = 0+amountOfCoins*coinTotalValue
//         return sum
//     }
// }


// changeEnough(4.25, [25, 20, 5, 0])

// function changeEnough(itemPrice, amountOfChange){
//     const mySum = howMuchChange(amountOfChange);
//     if(mySum>itemPrice){
//         console.log("You can buy it!")
//         return true
//     }else (console.log("Now is not the best time"))
//     return false
// }

// function howMuchChange(array){
//     let coinValue
//     for(let i=0;i<array.length;i++){
//         let howManyofEachCoin = array[i]
//         if(i===0){coinValue=0.25}
//         if(i===1){coinValue=0.10}
//         if(i===2){coinValue=0.05}
//         if(i===3){coinValue=0.01}
//     let total = howManyofEachCoin*coinValue
//     return total
// }
// }


//Exercise 6

function hotelCost(){
    const answer = prompt("How many nights would you like to stay?")
const numAnswer =Number(answer)

while (numAnswer===""||isNaN(numAnswer)){  ///what about spaces without answers?
    answer = prompt("How many nights would you like to stay?")
}
const pricePerNight = 140
const totalPrice = pricePerNight * numAnswer
//console.log(totalPrice);
return totalPrice
}

function planeRideCost(){
    let answer
    while (answer >= 0 || answer ==null || answer ==""){
        answer = prompt("Where are you flying to?")
    }
    //console.log("Your destination is", answer);
    if(answer==="London") return 183
    if(answer==="Paris") return 220
    return 300
}

function rentalCarCost(){
    let question = prompt("How many days would you like to rent?")
    const answer = Number(question);
    while(answer===isNaN(answer) || answer ===""){
        question = prompt("How many days would you like to rent?")
    }
    const priceOfCarPerDay = 40
    let discount= 0.05
    let total = 0
    if(answer>=10){
        total= priceOfCarPerDay*answer-priceOfCarPerDay*answer*discount
        //console.log("Your total bill after discount is: $", total)
        return total
    }else (total= priceOfCarPerDay*answer) 
    //console.log("Thank you, the total bill is $", total)
    return total}
    
function totalVacationCost(){
        const hotelPrice=hotelCost();
        const priceOfThePlane= planeRideCost();
        //console.log(priceOfThePlane);
        const carPrice= rentalCarCost();
        const totalVactionPrice = hotelPrice+priceOfThePlane+carPrice;
        console.log(`The car cost ${carPrice}, the hotel costs ${hotelPrice} and the plane costs ${priceOfThePlane}. The total vaction will cost ${totalVactionPrice}.`)
    }
totalVacationCost();





















































































//Exercise 1
// function infoAboutMe(){
//     console.log("My name is David, I am 38 and love to sing.")
// }
// infoAboutMe();

// //Part 2
// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
// }

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

//Exercise 2: Tips

// function calculateTip(){
// let total = prompt("How much is the bill?");
// console.log(total);
// if (total<50){
//     console.log(total *1.20);
// } else if (total>=50 && total<=200){
//     console.log(total*1.15);
// } else {
//     console.log(total *1.10);
// }
// return total
// }

// calculateTip();

//Exercise 3: Find the Numbers Divisilbe by 23

// function isDivisible() {
//     let sum = 0;
//     for (let i = 0; i < 500; i++) {
//         if (i % 23 === 0) {
//             sum += i;
//             console.log(i);
//         };
//     }console.log(sum);
// }
// isDivisible(500);

// function divideByIt(){
//     let sum=0;
//     for(let i=45;i<500;i++){
//         if(i%45===0){
//             console.log(i);
//             sum+=i;
//         };
//     }console.log(sum);
// }

// // divideByIt(500);
// // divideByIt(3);
// divideByIt(45);


//Exercise 4: Shopping List

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ["banana","orange","apple"];

// function howMuch(){
//     let total =0;
//     for(let i=0; i<shoppingList.length; i++){
//         let item = shoppingList[i];
//         if(item in stock){
//             if(stock[item]>0){
//                 total+=prices[item];
//                 stock[item]= stock[item] -1;
//             }  
//                 else { console.log(`Sorry we don't have ${item}`);}
//         } console.log(total);
//     }
// }
// howMuch();
//bonus

//Exercise 4
// I need to determine if I can afford something. 
// I have a function which has two arguments.
// One for amountOfChange
// The other for priceOfItem
// Change is represented with four different values, quarters, dimes,
// nickels, and pennies.
// To solve this I need to determine how much is my array of change worth.
// So a seperate function that calculates the sum of the array is needed.

// function changeEnough(itemPrice, amountOfChange){  
// const sum = sumOfChange(amountOfChange)
//     if(sum>itemPrice){
//         console.log("You can afford it.");
//         return true;
//     }   else{ console.log("It's not the right time to buy");
//         return false;
//     }
// }

// function sumOfChange(arr){
// let sum =0;
// for (let i=0; i<arr.length; i++){
// let coinValue
// const amountOfSpecificCoin = arr[i];
// if(i===0){coinValue=0.25}
// if(i===1){coinValue=0.10}
// if(i===2){coinValue=0.05}
// if(i===3){coinValue=0.01}

// sum = sum + amountOfSpecificCoin*coinValue;
// } return sum;
// }
// changeEnough(0.75, [0,0,20,5]);
//changeEnough(14.11, [2,100,0,0])
// changeEnough(4.25, [25,20,5,0])

//Exercise 6: Vacations Costs



// function hotelCost(){
//         let hotelStay = prompt("Hey how many nights would you like to stay?");
//         let numberOfNights = Number(hotelStay);
//         while(numberOfNights <1 ||  isNaN(numberOfNights)){
//             hotelStay = prompt("Hey how many nights would you like to stay?");
//             numberOfNights = Number(hotelStay);
//         }
//         const costPerNight= 140;
//         const totalPrice = costPerNight * numberOfNights;
//         return totalPrice;
//     }
    
// function includesNumbers(str){
//     const regex = new RegExp(/\d/)
//     return regex.test(str)
// }

// function planeRideCost(){
//     let destination
//     while (destination == "" || destination == null || includesNumbers(destination)){
//         destination = prompt("Where are you flying to?");
//     }
//     if(destination === "London") return 183
//     if(destination === "Paris") return 220
//     return 300
// }

// function rentalCarCost(){
//     // let discountPrice
//     answer = prompt("How many days would you like to rent a car?")
//     while(answer==="" || isNaN(answer)){
//         answer = prompt("How many days would you like to rent a car?");
//     }
//     const dailyPrice= 40
//     const numberOfDays= Number(answer);
//     let discount =0
//     if(numberOfDays>=10) discount =0.05
//     const totalPrice = numberOfDays*dailyPrice *(1-discount);
//     return totalPrice
// }

// function totalVacationCost(){
// const carPrice = rentalCarCost();
// const hotelPrice= hotelCost()
// const PlaneRidePrice = planeRideCost();
// console.log(`The car cost ${carPrice}, the hotel cost ${hotelPrice} and the plane tickets cost ${PlaneRidePrice}`)
// let totalVacationPrice = carPrice+hotelPrice+PlaneRidePrice;
// console.log("The trip will cost:", totalVacationPrice);
// }
// totalVacationCost();












///\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\












// let locations= {
    //     London: 183,
    //     Paris: 220,
    //     Other: 300
    //     }
    // let costOfTicket = locations[i];
    
    
    // if(locations[i]=London){costOfTicket=locations.London[0]}
    // if(locations[i]=Paris){costOfTicket=locations.Paris[0]}
    // if(locations[i]=Other){costOfTicket=locations.Other[0]}


//check booksales

//Exercise 5







































// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }

// const prices = {
//     "xzxz": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10,
//     "banana": 2,
// }

// const myCart = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;
//     for (let i = 0; i <myCart.length; i++){
//         let item = myCart[i];
//         if (item in stock){
//             if(stock[item] > 0) {
//                 total += prices[item];
//             } else{
//                 console.log(`${item} is not in stock`);
//             }
//         }console.log(total);
//     } 
// }
//         myBill();

        
//Valuestock26

// const stock={
//     "banana": 2,
//     "apple":    3,
//     "oranges": 4,
//     "strawberries": 0,
//     "melons": 5,
// }

// const price={
//     "banana": 1.5,
//     "apple":    2,
//     "oranges": 2.75,
//     "strawberries": 4,
//     "melons": 4.5,
// }

// const myCart= ["strawberries", "oranges", "melons", "banana"];

// function howMuch(){
//     let total=0;
//     for(let i=0; i<myCart.length; i++){
//         let item = myCart[i];
//         if(item in stock){
//             if(stock[item]>0){
//                 total += price[item];
//             } else {console.log(`Sorry ${item} is not in stock`)}
//         }console.log(total);
//     }
// }
// howMuch();



// const candies={
//     "chamtzoot": 11,
//     "gummy": 0,
//     "gum": 24,
//     "fizz": 8,
//     "chocolate": 7,
// }

// const price={
//     "chamtzoot": 11,
//     "gummy": 19,
//     "gum": 24,
//     "fizz": 8,
//     "chocolate": 7,
// }


// const myBag =["chamtzoot","fizz","gummy",];

// function howMuch(){
    // let total = 0;
    // for (let i=0; i<myBag.length; i++){
        //     let item = myBag[i];
        //     if(item in candies){
            //         if(candies[item]>0){
                //             total+=price[item];
//         } else { console.log(`We are sorry ${item} is not in stock today`);
//         }
//     }console.log(total);
// }
// }

// howMuch();



// const cars={
//     "Ferrari": 11,
//     "Lamborghini": 0,
//     "Tesla": 24,
//     "Benz": 8,
//     "Corvette": 7,
// }

// const price={
//     "Ferrari": 470000,
//     "Lamborghini": 589000,
//     "Tesla": 80000,
//     "Benz": 240000,
//     "Corvette": 90000,
// }
// const myCart=["Benz", "Tesla", "Lamborghini"];

// function howMuch(){
    //     let total=0;
    //     for (let i=0; i<myCart.length; i++){
        //         let item = myCart[i];
        //         if (item in cars){
            //             if(cars[item]>0){
                //                 total+=price[item];
                //             } else { console.log(`Sorry ${item} is not in stock.`);}
                //         }console.log(total);
                //     }
                // }
                // howMuch();
                
                
                // const hotelRooms={
                //     "Jerusalem": 11,
                //     "Tel Aviv": 0,
                //     "Golan": 24,
                //     "Tzefat": 8,
                //     "Shilo": 7,
                // }
                
                // const price={
                //     "Jerusalem": 1100,
                //     "Tel Aviv": 1000,
                //     "Golan": 490,
                //     "Tzefat": 580,
                //     "Shilo": 480,
                // }
                
                // const myOrder = ["Jerusalem", "Shilo"];
                
                // function howMuch(){
                    //     let total = 0;
                    //     for (let i=0; i<myOrder.length; i++){
                        //         let item = myOrder[i];
                        //         if(item in hotelRooms){
                            //             if(hotelRooms[item]>0){
                                //                 total += price[item];
                                //             } else {
                                    //                 console.log(`We are sorry ${item} is not available.`);
                                    //             }
                                    //         }console.log(total);
                                    //     }
                                    // }
                                    // howMuch();
                                    
                                    
                                    
                                    // const games={
                                    //     "tic-tac-toe": 11,
                                    //     "puzzle": 0,
                                    //     "coloring": 24,
                                    //     "race car": 8,
                                    //     "yoyo": 7,
                                    // }
                                    
                                    // const price={
                                    //     "tic-tac-toe": 5,
                                    //     "puzzle": 10,
                                    //     "coloring": 4,
                                    //     "race car": 8,
                                    //     "yoyo": 3,
                                        
                                    // }
                                    
                                    // const myOrder = ["puzzle", "race car", "coloring"];


                                    // function howMuch(){
                                    //     let total =0;
                                    //     for(let i=0; i<myOrder.length; i++){
                                    //         let item = myOrder[i];
                                    //         if(item in games){
                                    //             if(games[item]>0){
                                    //                 total+=price[item];
                                    //             } else {
                                    //                 console.log(`Sorry ${item} is not in stock.`);
                                    //             }
                                    //         }console.log(total);
                                    //     }
                                    // }
                                    
                                    // howMuch();
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    //         if (myCart[i].length===stock[i] && stock[i][0]>=1){
            //             console.log(prices[i][0]);
            //             sum+=i;
            //         }
            //     }console.log(sum);
            // }
            
            // myBill();






















// // // // function infoAboutMe(){
// // // // console.log('My name is David and I live in Yad Binyamin. I am 38 and love to exercise and listen to music.')};
// // // // console.log(infoAboutMe);

// // // // Exercise 1
// // // function infoAboutMe(){
// // //     console.log('My name is David, I am 38 and love to exercise.');
// // // }

// // // function infoAboutMe(personName, personAge, personFavoriteColor){
// // //     console.log(`Your name is ${personName} you are ${personAge} and your favorite color is ${personFavoriteColor}.`)
// // // }

// // // infoAboutMe("David", 45, "blue");
// // // infoAboutMe("Josh", 12, "yellow");

// // //Exercise 2
// // let bill = prompt("What is the amount of the bill?");
// // function calculateTip() {
// //     if(bill < 50){
// //         console.log(bill*1.20);
// //     } else if (bill <= 200){
// //         console.log(bill*1.15);
// //     } else{
// //         console.log(bill*1.10)
// //     }
// //     }
// // const withtip = calculateTip();



// function isDivisible() {
//     let sum = 0;//why do we need this, if the function starts from 0?
//     for (let i = 0; i < 500; i++) {
//         if (i % 23 == 0) {
//             sum += i;//why do we need this if in line 34, we have i++ which increments by one?
//             console.log(i);
//         };
//     }
//         console.log(sum)
//     }

// function isDivisible() {
//     //let sum=0;
//     for (let i = 0; i < 500; i++) {
//         if (i%23==0) {
//          //sum+= i;
//          console.log(i);
//       } ;
//     }
//  //  console.log(sum)
// }

// function isDivisible(){
//     for(let i=0; i<=500; i++){
//         if(i%25==0){
//         console.log(i);
//     };
// }
// }
// isDivisible(500);

//Exercise 3
//I tried for 30 minutes to add parameters and run them in the funciton. What is wrong?


// const firstparameter=3;
// const secondparameter=45;

// function isDivisible(firstparameter){
//     for(let i=0; i<=500; i++){
//         if(i%firstparameter===0){    //  why can't I write my parameter here?
//             console.log(i);
//         };
//     }
// }


// isDivisible(3)
// isDivisible(45)

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

//Exercise 4
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }
// const shoppingList = ["banana","orange","apple"];

// function myBill(){
//     for(let fruit of shoppingList){
//         console.log;
//         i++;
//     }
//     }











// alert();
// prompt();
// console.log("Hello", "How are you?")
// //function declaration
// function sayHello(){
//     console.log("Hello");
// }

// sayHello();

// //function expression
// var sayBye =function(){
//     console.log("Bye");
// }
// sayBye();

// function sing(song){
//     console.log("AHHH");
// }

// sing("Laa dee daa");
// sing("hello");
// sing("horray");

// function multiply(a,b){ //a,b are parameters
// if (a>10||b>10) {
//     return "too hard";
// } else {
//     return a*b;
// }
// }
// alert(multiply(2,11)); /// 2,11 are arguments

// function declaration(){}

// var funcExpression =function (){};

// //expression, something that produces a value
// 1+3;
// var a =2;
// return true;
// //calling or invoking a function
// alert();
// funcExpression(param1, param2);

// //assign a variabl
// var a = true;

// //function vs. method
// function thisIsAFunction(){}

// var obj = {
//     thisIsaMethod: function(){}
// }

// var database = [
//     {
//         username: "davidPerlow",
//         password: "donttell"
//     },
//     {
//         username: "yonitPerlow",
//         password: "timetotell"
//     },
//     {
//         username: "mitchPerlow",
//         password: "dotell"
//     }
// ];

// var newsFeed = [
//     {
//         username: "Bobby",
//         timeline: "So tired of this"
//     },
//     {
//         username: "Sally",
//         timeline: "Javascript is amazing"
//     }
// ];

// function isUserValid(username, password) {
//     for (var i = 0; i < database.length; i++) { //this for loop is going trough the length of the array
//         if (database[i].username === username &&
//             database[i].password === password) {
//             return true;
//         }
//     }                                           // So in this function lines 194 we have made a function to identify the user if true or false.
//     return false;
// }

// function signIn(username, password) {           // Now in this code we are using a function to sign in based on the condition that if the identity is valid,
//     if (isUserValid(username, password)) {      // to display the newsfeed
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, wrong username please try again")
//     }
// }

// var userNamePrompt = prompt("What\'s your username?");
// var passwordPrompt = prompt("What\'s your password?");

// signIn(userNamePrompt, passwordPrompt);

    // for (var i = 0; i < database.length; i++) {
    //     if (database[i].username === username &&
    //         database[i].password === password) {
    //         console.log(newsFeed);
    //     } else {
    //         alert("Please sign in again");
    //     }
    // }


//     {
// if(user === database.username &&
//     pass===database.password){
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, wrong userName")
//     }
// }
// }

// signIn(userNamePrompt, passwordPrompt);


