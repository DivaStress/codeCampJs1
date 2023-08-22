var count = 0;

function cc(card){
    if(cc >= 2 && cc <= 6){
        count++;
    }switch(card){
        case 10 :
        case "J":
        case "Q":
        case "A":
            count--
            break;
    }

    var holdbet = "hold";
    if (count < 0){
        holdbet = "bet"
    }
    return count + " " + holdbet; 
}

cc(2); cc("K"); cc(8); cc("7"); cc("5");
console.log(cc(4));