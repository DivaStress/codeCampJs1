function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var test = [1,2,3,4,5];


console.log("Before " + JSON.stringify(test));
console.log(nextInLine(test,6));
console.log("After " + JSON.stringify(test));