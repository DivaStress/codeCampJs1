var myGlobal = 10;

function fun1(){
     oopsGlobal = 6;
}

function fun2(){
    var output = "";
    if (typeof myGlobal != undefined){
        output += "myGlobal " + myGlobal;
    }
    if (typeof oopsGlobal != undefined){
        output += " oppsGlobal " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();