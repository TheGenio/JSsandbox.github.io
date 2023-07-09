


let count = 0;
let rand;


document.getElementById("decreaseButton").onclick = function () {

    count --;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetButton").onclick = function () {

    count = 0;
    document.getElementById("countLabel").innerHTML = count;
} 

document.getElementById("increaseButton").onclick = function () {

    count ++;
    document.getElementById("countLabel").innerHTML = count;
} 
//new
document.getElementById("decrease100Button").onclick = function () {

    count -= 100;
    document.getElementById("countLabel").innerHTML = count;
} 

document.getElementById("decrease10Button").onclick = function () {

    count -=10;
    document.getElementById("countLabel").innerHTML = count;
} 

document.getElementById("increase10Button").onclick = function () {

    count += 10;
    document.getElementById("countLabel").innerHTML = count;
} 
document.getElementById("increase100Button").onclick = function () {

    count += 100;
    document.getElementById("countLabel").innerHTML = count;
} 


document.getElementById("sqrtButton").onclick = function () {

    let sqrt = Math.sqrt(count)
    document.getElementById("sqrtLabel").innerHTML = sqrt;
}

document.getElementById("randomButton").onclick = function () {

    rand = Math.round(Math.random()*10000 + 1)
    document.getElementById("randomLable").innerHTML = rand;
}

document.getElementById("setButton").onclick = function () {

    count = rand
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("Age_Check_Button").onclick = function(){


    let age = Number(document.getElementById("Age_input").value)
    let Accses 

    switch (true) {
        case age > 115:
            Accses = "New world record"
            break;

        case age >65:
            Accses = "Acsess Granted retired person"
            break;

        case age > 18:
            Accses = "Normal person"
            break;
        
        case age < 0:
            Accses = "Not even born yet! Enter a valid age"
            break;
        
        case 0< age < 18:
            Accses =  "Accses Denied"
            break;

    
        default:
            break;
    }
    console.log(age)
    document.getElementById("Permission").innerHTML = Accses

}



document.getElementById("Personality_Sub").onclick = function(){

    let moody = document.getElementById("Moody_Check").checked
    let happy = document.getElementById("Happy_Check").checked
    let sad = document.getElementById("Sad_Check").checked
    let funny = document.getElementById("Funny_Check").checked

    let type



    
    if(moody&&sad){
        type = "depression"
    } else if(happy && funny){
        type = "INFT"
    } else if(funny && sad){
        type = "INFJ"
    } else if(sad && happy){
        type = "How tf"
    } else {
        type = "IIII"
    }


    type = "Personality Type: " + type

    document.getElementById("Prsonality Type").innerHTML = type


    
}