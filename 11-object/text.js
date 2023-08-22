var myProfile = {
    "name"  : "Diva",
    "age"   : "18",
    "hobby" : "watch anime",
    "friend": void(0),
    "69"    : "funny number"
};

myProfile.name = "DivaStress";
myProfile["state"] = "clueless";
var myName = myProfile.name;
var myHobby = myProfile["hobby"];
var myNumber = 69;
var my = myProfile[myNumber];
delete myProfile.age;

function checkObj(checkprop){
    if(myProfile.hasOwnProperty(checkprop)){
        return myProfile[checkprop];
    }else{
        return "not found";
    }
}

console.log(myName);
console.log(myHobby);
console.log(my);
console.log(myProfile);
console.log(checkObj("name"));