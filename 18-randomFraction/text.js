function randomFracton(){

    return Math.random();
}

console.log(randomFracton());


var randomNumberbetween0and19 = Math.floor(Math.floor() * 20);

function randomWholeNum(){
    
    return Math.floor(Math.random() * 11);
}

console.log(randomWholeNum());

function myRandomRange(myMin, myMax){

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

myRandom = myRandomRange(5, 10);
console.log(myRandom);