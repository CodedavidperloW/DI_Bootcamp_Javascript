//Exercise 1 BMI
// let Height
// let Mass

// const object1 = {
//     fullName: "David",
//     Mass: 81.6,
//     Height: 1.85,
//     TotalBMI: function () {
//         return (this.Mass) / (this.Height * this.Height);
//     }
// };

// console.log(object1);
// console.log(Object.values(object1), object1.TotalBMI())


let grades = [60,75,86,90,55,95]
findAvg();
function findAvg(){
    let sum = 0
    for(let i=0;i<grades.length;i++){        
        let score = grades[i];
        sum = score+sum
        console.log(`The total sum is :, ${sum}`)
        let average = sum/grades.length
        console.log(`The average score is: ${average}`);
        if(average>65){
            console.log("Congrajulations you passed the course!")
        } else{ console.log("You need to repeat the course.")}
    }
}


// const bmi = calcBMI()
// function calcBMI() {
//     let calcuation = Mass / Height * Height;
//     return calcuation
// }

// const object2 = { fullName: "Yonit", Mass: 81.6, Height: 1.78, TotalBMI: calcuation }
// console.log(object1)








// const object1 = {
//         let Mass
//         let Height
//         console.log(calcuation);
//         return calcuation
//     }
// }

// const object2 = {
//         let Mass
//         let Height
//         let calcuation = (Mass) / (Height * Height)
//         console.log(calcuation);
//     }
// }

// function bmi() {
//     let Mass
//     let Height
//     let calcuation = (Mass) / (Height * Height)
//     console.log(calcuation);
// }

// bmi(object1)