var myArray = [];

for(i = 1; i <= 5; i++){
    myArray.push(i);
}

console.log(myArray);

var myArray2 = [];

for(i = 1; i <= 10; i += 2){
    myArray2.push(i);
}

console.log(myArray2);

var myArray3 = [];

for(i = 9; i > 0; i -= 2){
    myArray3.push(i);
}

console.log(myArray3);

var myArray4 = [2, 3, 4, 5, 6];
myTotal = 0;

for(i = 0; i < myArray4.length; i++){
    myTotal += myArray4[i];
}

console.log(myTotal);

function multiplyAll(arr){
    var product = 1;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]])

console.log(product);