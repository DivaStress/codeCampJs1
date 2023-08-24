var spaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus =  new spaceShuttle("Jupiter");

console.log(zeus.targetPlanet);

//example
function makeClass(){
    class vegetable{
        constructor(name){
            this.name = name
        }
    }
    return vegetable;
}
const vegetable = makeClass();
const carrot = new vegetable('carrot');
console.log(carrot.name);


//Use getters and setters to Control acces to an Object
class Book {
    constructor(author){
        this.author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    setWriter(updatedAuthor){
        this._author = updatedAuthor;
    }
}



//Chalengge
function makeClass(){
    class Thermostats{
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }

    return Thermostats;
}

const Thermostats = makeClass();
const thermos = new Thermostats(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);