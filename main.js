//Messages for dungeon quest

let question = "Which path do you want to take? North, South, East or West"
let quest = "What do you want to do? Leave or open chest"
let gameEnd = "GAME OVER"
let nothing = "You found nothing"
let monster = "You found a monster. GAME OVER"
let treasure = "You found treasure. You Win"
let foundRoom = "You found a room."

//Prompts for dungeon

let test = prompt(question)

//Hall question
if (test == "north") {
    alert(nothing);
} else if (test == "south") {
    alert(foundRoom);
} else {
    alert(gameEnd);
}

//Room question 1
let room = prompt(quest)
if (room == 'leave') {
    alert(nothing);
} else {
    alert(monster);
}

//Room question 2
let roomTwo = prompt(quest)
if (roomTwo == "leave") {
    alert(gameEnd);
} else {
    alert(nothing);
}

//Room question 3
let roomThree = prompt(quest)
if (roomThree == "leave"){
    alert(nothing);
} else {
    alert(treasure);
}

alert(treasure)
