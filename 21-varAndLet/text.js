let catName = "nyanko";
let quote;

catName = "Neko";

function catTalk(catName,quote){

    catName = "Kyo";
    quote = catName + " Nyaa";

    return quote;
    }

console.log(catTalk());

function checkScope(){
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("block scope i is", i);
    }
    console.log("function scope i is", i);
}

checkScope();