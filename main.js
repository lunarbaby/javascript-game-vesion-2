//Messages for dungeon quest

let question = "Which path do you want to take? North, South, East or West"
let quest = "What do you want to do? Leave or open chest"
let gameEnd = "GAME OVER"
let nothing = "You found nothing"
let monster = "You found a monster. GAME OVER"
let treasue = "You found treasure. You Win"
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

//Room question
let room = prompt(quest)
if (room == 'leave') {
    alert(nothing);
} else {
    alert(monster);
}

