const createPerson = (name,age,gender) => {

return{
    name : name,
    age  : age,
    gender : gender
    };
};

console.log(createPerson("Diva",18,"trap"));

//simple
const person = (name,age,gender) => ({name,age,gender});
console.log(person("Diva",18,"trap"));


//Write Concise Declaration Function
// const bicycle = {
//     setGear :   function(newGear){
//         "use Strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);

//simple
const bicycle = {
    setGear(newGear){
        "use Strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);