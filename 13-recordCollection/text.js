//Setup
var collection = {
    "2548": {
        "album" : "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },

    "2468": {
        "album" : "1999",
        "artis" : "prince",
        "tracks": [
            "1999",
            "Little Red Corvette",
        ]
    },

    "1245" : {
        "artist" : "Robert Falmer",
        "tracks" : [],
    },

    "5439" : {
        "album" :  "ABBA Gold"
    }
};
//keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

//Only change code below this line
function updateRecords(id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }

    return collection;
}
//Alter value below to test your code
updateRecords(1245,"tracks","something")
console.log(updateRecords(5439, "artist", "ABBA"));