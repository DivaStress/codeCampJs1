//three dot ... 
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b,0);
    };
})();
console.log(sum(1,2,3,4));

//Spread Operator to evaluate array in place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MEI"];
let arr2;

(function(){
arr2 = [...arr1];
arr1[0] = "POTATO"
})();
console.log(arr2);

//Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x : 3.6, y : 7.4, z : 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x : a, y : b, z : c} = voxel;
console.log(voxel);

//Exam
const AVG_TEMPERATURES = {
    today : 77.5,
    tommorow : 79
};

function getTempOfTmrw(avgTemperatures){
    "use strict"
    //change code below this line
    const {tommorow : getTempOfTmrw}= avgTemperatures;//change this line
    //change code above this line
    return getTempOfTmrw;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));//should be 79


//Destructuring Assignment With Nested Object
const LOCAL_FORECAST = {
    today : {min : 72, max : 83},
    tommorow : {min : 73.3, max : 84.6},
};

function getMaxOfTmrw(forecast){
    "use strict";

    const {tommorow : {max : maxOfTmrw}} = forecast;

    return maxOfTmrw;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));


//Use Destructuring Assignmnet to Assign Variables from Arrays
const [o,p,q] = [1, 2, 3, 4, 5, 6];
console.log(o,p,q);

let u = 8, n = 6;
(() => {
    "use strict"
    [u, n] = [n, u]
})();
console.log(u);
console.log(n);


//Use Destructuring Assignmnet with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){

    const [ , ,...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


//Use Destructuring Assignmnet to pass an Object as a function's parameters
//For API purpose
const stats = {
    max : 56.78,
    standard_devidation : 4.34,
    median : 34.54,
    mode : 23.87,
    min : -0.75,
    average : 35.85
};
const half = (function(){

    return function half({max, min}){
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));