///I need to iterate through an array///
for (let i=0; i<names.length; i++){
    if(i===2){
        continue;
    }
    if(i===4){
        continue;
    }
    console.log(i);
}

let names= ["john", "sarah", 23, "Rudolf",34];
for (let i=0; i<names.length; i++){
    if(typeof names[i] === !"string"){
        continue;//I put this because I am 
        //in essence telling the loop to continue
        //everytime it sees not a string. correct?
    }
    console.log(names+i);
}
    if(typeof names[i] === "string"){
        console.log(names^[A-Z]*$/.test(names[i][0]));
        ///This will check if the strings have
        ///an uppercase letter --- maybe I need
        ///to use.
        ////(names?.match(/[A-Z]/));
        //(names^[A-Z]*$/.test(names[i][0]))
        console.log(/^[A-Z]*$/.test(names[i][0]))
    }
    else(let i=0; i<names.length; i++){
        names[i] =names[i].charAt(0).toUpperCase() + names[i].slice(1)
    }
    //if the item is not a string, go out of the loop.

    for(let i=0; i<names.length; i++){
        if (typeof names[i] ==!"string"){
            break;
        }////f the item is a string, display it.
        else if (typeof names[i] ==="string"){
            continue;
        }
    }
