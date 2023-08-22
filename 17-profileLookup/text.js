//setup
var contacts = [
    {
        "firstname" : "Akira",
        "lastname"  : "Laine",
        "number"    : "0543236543",
        "likes"     : ["pizza", "coding", "brownie points"]
    },
    {
        "firstname" : "Harry",
        "lastname"  : "Potter",
        "number"    : "0994372684",
        "likes"     : ["Hogwards", "Magic", "Hagrid"]
    },
    {
        "firstname" : "Sherlocks",
        "lastname"  : "Holmes",
        "number"    : "04873345643",
        "likes"     : ["Intriguing Case", "Violin"]
    },
    {
        "firstname" : "Kristian",
        "lastname"  : "Vos",
        "number"    : "Unknown",
        "likes"     : ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstname === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contacts";
}

//change these values to test your function
var data = lookUpProfile("Sherlocks","lastname");

console.log(data);