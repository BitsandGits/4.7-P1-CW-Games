// SCORE VALIDATOR 
function scoring(){
    do {
        score1 = Number(prompt("How would you rate this game from 1(boring) to 5(great)?"));
        if (isNaN(score1) || score1 < 1 || score1 > 5){
            alert("Invalid input for game 1, please try again");
        }
    } while (isNaN(score1) || score1 < 1 || score1 > 5)
    return score1;
} 

function askUser(){
    // INPUT FOR GAME 1
    let game1 = prompt("What is a recent game you played?");
    let score1 = scoring();

    // INPUT FOR GAME 2
    let game2 = prompt("What is another recent game you played?");
    let score2 = scoring();

    // DISPLAY FOR GAME 1
    let display1 = `Title 1: ${game1}: ${score1}`;
    document.querySelector("#game1").innerHTML = display1;
    if (score1 < 4){
        document.querySelector("#game1").style.color = "red";
    }
    else {
        document.querySelector("#game1").style.color = "green";
    }

    // DISPLAY FOR GAME 2
    let display2 = `Title 2: ${game2}: ${score2}`;
    document.querySelector("#game2").innerHTML = display2;
    if (score2 < 4){
        document.querySelector("#game2").style.color = "red";
    }
    else{
        document.querySelector("#game2").style.color = "green";
    }
}

function addMore(){
    // figure out how many loops 
    let times = Number(prompt("How many titles would you like to add? I can only keep track of 8 more titles!"));

    // save info in array 
    let gameTitle = [];
    let gameScore = [];
    for (let i = 0; i < times; i++){
        gameTitle[i] = prompt("What is the game name?");
        gameScore[i] = scoring();
    }

    // display the array 
    let x = 3; // id of game 
    for (let i = 0; i < times; i++){
        document.querySelector("#game"+x).innerHTML = `Title: ${gameTitle[i]}: ${gameScore[i]}`;
        x++;
    }
}
