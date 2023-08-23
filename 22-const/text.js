function print(str){

const Text = str + " is best chara";

for(let i = 0; i < str.length; i+=2){
    console.log(Text);
    }
}

print("kazuma");


const d = [4,2,0];

function editInPlace(){

    d[0] = 6;
    d[1] = 9;
    d[2] = 9;
}

editInPlace();
console.log(d);


function frezzeObj(){

    const MATH_CONSTANT = {
        PI : 3.14
    };

    Object.freeze(MATH_CONSTANT);

    try {
        MATH_CONSTANT.PI = 69;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}

const PI = frezzeObj();

console.log(PI);