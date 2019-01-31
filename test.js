"use strict";

//Game code with functions

//Global variables
let question = "Which path do you want to take? North, South, East or West"
let end = "GAME OVER!"
let findHall = "You are now in a hall. Please continue."
let nothing = "You found nothing. Game Over"
let escapeChest = "You found a key to escape. You successfully leave the dungeron but you did not find the treasure. Try again."
let escapeDoor = "You have found a door. You open the door and find yourself outside. GAME OVER!"
let trapHall = "You walk down the hall. You run into a dead end so you decided to turn around. As you start turining around spikes come up from the floor and you die instantly. GAME OVER"
let poisonRoom = "You walk into the room. You notice that there is a chest in the middle of the room. You open the chest and inside is a cloud of posion gas. You died. GAME OVER"

//The function to start the game

function startGame(){
    entrance();
}

//The function for the entrance

function entrance (){
    let welcome = confirm ("Do you want to enter the dungeon?");
    if (welcome == true){
        alert(findHall);
        enterHallOne();
    }else {
        alert(end);
    }
}

//The function for entering hall one

function enterHallOne (){
    let i = prompt(question);
    if (i == "east") {
        alert(escapeDoor);
    } else if (i == "north"){
        entrance();
    } else if (i == "south"){
        alert("You have found a room.");
        alert(poisonRoom);
    } else if (i == "west") {
        let j = confirm(findHall);
        if (j == true) {
            enterHallTwo();
        } else {
            entrance();
        }
        
    } else {
        alert(end);
    }    
} 

// The function for hall two

function enterHallTwo () {
    let i = prompt(question);
    if (i == "east") {
        let j = confirm(findHall);
        if (j == true) {
            enterHallThree();
        } else {
            alert("A cloud of smoke surrounds you and ...");
            enterHallFour();
        }

    } else if (i == "north") {
        alert(escape);

    } else if ( i == "south") {
        alert(nothing);

    } else if (i == "west") {
        alert(trapHall);
    } else {
        alert(end);
    }
}

// The function for hall three

function enterHallThree () {
    let i = prompt(question);
    if (i == "east") {
        alert(poisonRoom);
    } else if (i == "north") {
        entrance();
    } else if (i == "south") {
        alert(findHall);
        enterHallFour();
    } else if (i == "west") {
        alert(nothing);

    } else {
        alert(end);
    }
}

// The function for hall four

function enterHallFour () {
    let i = prompt(question);
    if (i == "east") {
        enterHallTwo();
    } else if (i == "north") {
        alert (trapHall);
    } else if (i == "south") {
        alert(nothing);
    } else if (i == "west") {
        alert("You have found the treasure chest. YOU WIN!");
    }
}


