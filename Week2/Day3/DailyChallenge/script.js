// const count = 0;



// ////const myString = ['*','**','***','****','*****','******'];
// const myString = [0, 1, 2, 3, 4, 5,]
// for (item of myString) {
//     console.log("count",count++)
//     if (myString[0] < 6) {
//         console.log('*'.repeat(1));
//     } if (myString[1] < 6) {
//         console.log('*'.repeat(2));
//         if (myString[2] < 6) {
//             console.log('*'.repeat(3));
//             if (myString[3] < 6) {
//                 console.log('*'.repeat(4));
//                 if (myString[4] < 6) {
//                     console.log('*'.repeat(5));
//                     if (myString[5] < 6) {
//                         console.log('*'.repeat(6));
//                     }}}}}}
const myString =[1,2,3,4,5,6];
console.log(myString);
for(item of myString){
    if(item<=6){
        console.log('*'.repeat(item));
    }
}