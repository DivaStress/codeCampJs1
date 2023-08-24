const myProfile = {
    name : "Diva",
    age  : 18
};

const greetings = `Hello my Name is ${myProfile.name}, i'm ${myProfile.age} years old`;

console.log(greetings);

//Chalengge
const result = {
    succes  :   ["max-lenght","no-amd","prefer-arrow-function"],
    failure :   ["no-var","var-on-top","line-break"],
    skipped :   ["id-blacklist","no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];

    for(let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [`<li class="text-warning">no-var</li>`,]
 * [`<li class="text-warning">no-var</li>`,]
 * [`<li class="text-warning">no-var</li>`,]
 */

const resultDisplayArray = makeList(result.succes);
console.log(resultDisplayArray);