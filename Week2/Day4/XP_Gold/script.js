function checkTheString(string){
if(string ===""){
    console.log(true)}
    else{
        console.log(false)
    }
}
const stringEx= ""

checkTheString(stringEx)



const fullName= "Ruth Perlow"


function abbrevName(fullName){
    const nameToString = fullName.split(" ")
    const firstName = nameToString[0]
    const getFirstInitial = nameToString[1][0]
    console.log(firstName,getFirstInitial, ".");
}
abbrevName(fullName)



const dan = "nOw iS tHe time!"
function swapcase(str){
    let newLetters = '' // this will replace the letters
    for(let i=0; i<str.length; i++){
        if(str[i]==str[i].toUpperCase()){
            newLetters += str[i].toLowerCase();
        } else {
            newLetters += str[i].toUpperCase();
        }
    }console.log(newLetters);
}

swapcase(dan);



const phrase = "This will pass AnD GooD ThINGS will happen!"

function changeThePhrase(str){
    let newLetters= ''
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            newLetters+=str[i].toLowerCase();
        }else{
            newLetters+=str[i].toUpperCase();
        }
    }console.log(newLetters);
}
changeThePhrase(phrase)

const newArray = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

function findOmnipresent(theArray,theValue){
    for(let i=0; i<theArray.length;i++){
        if(!theArray[i].includes(theValue)){
            console.log(false)
            return false
        }else{console.log(true)}
    }return true
}

findOmnipresent(newArray,8)