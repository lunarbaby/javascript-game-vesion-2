"use strict";
//code to reload page

function myFunction() {
    location.reload();
  }

//code for hallways

// let nothing = "You found nothing. Game Over"
// let question = "Which path do you want to take? North, South, East or West"
// let monster = "You found a monster. GAME OVER."
// let findHall = "You found another hall. Please continue"

// let i = prompt(question);

// if (i == "north" || i == "east" ) {
//     alert(nothing);
// } else if (i == "south") {
//     alert(monster);
// } else if (i == "west") {
//     alert(findHall);
     
//       let j = prompt(question);
//       if (j == "north") {
//          alert(monster)
//      } else if (j == "south" || j == "west") {
//             alert(nothing)
//      } else if (j == "east") {
//          alert(findHall);
         
//          let k = prompt(question);
//             if (k == "north") {
//                 alert(monster);
//             } else if (k == "south") {
//                 alert("You found the treasure room.")

//             } else if (k == "east" || k == "west"){
//                 alert(nothing);
//             } else {
//                 alert("Game Over");
//             }
    
//         } else {
//          alert('Game Over')
//      }

//     } else {
//     alert('Game Over');
// }

// Code for treasure room

// let i = prompt("Which chest do you want? Pick a whole number between 1 -10.");

// if (i == "1" || i == "5" || i =="8") {
//     alert(monster);
// } else if (i == "2" || i == "7" || i == "4") {
//     alert(nothing);
// } else if (i == "9") {
//     alert("You found the Treasure. YOU WIN!");
// } else if (i == "3") {
//     alert("You found a key to escape. You successfully leave the dungeon but you did not find the treasure. Try again.");
// } else {
//     alert("GAME OVER");
// }


//Merge Code

// I made an alert to introduce the player to the game.

alert("Welcome to the dungeon. You have been sent down to this dungeon to do one job. Find the treasure hidden deep within but most of the paths will lead to a ‘GAME OVER’. There is however a couple of ways out but you want to leave with the treasure and nothing else will do. You have only one shot so be careful and GOOD LUCK.")

//I used variables to replace repeated strings

let nothing = "You found nothing. Game Over"
let question = "Which path do you want to take? North, South, East or West"
let monster = "You found a monster. GAME OVER."
let findHall = "You found another hall. Please continue."
let escape = "You found a key to escape. You successfully leave the dungeron but you did not find the treasure. Try again."
let roomPrompt = "You walk into a very large room. The room is filled with barrels and chest. Barrels are generally filled with food and general supplies so you pass them by for the chests that are everywhere. After walking around the room a few times so you realized that there only a few chest that could contain the treasure.  You only have one shot at picking the correct one, so be careful. Which chest do you want? Pick a number between 0 and 10. Good luck."
let end = "GAME OVER!"

//This is the code for the game and the first if statment is hall one
let i = prompt(question);

if (i == "east" ) {
    alert(nothing);
} else if (i =="north"){
    alert(escape);
} else if (i == "south") {
    alert(monster);
} else if (i == "west") {
    alert(findHall);
     
    //This if statement represents hall two

      let j = prompt(question);
      if (j == "north") {
         alert(monster)
     } else if (j == "south" || j == "west") {
            alert(nothing)
     } else if (j == "east") {
         alert(findHall);
        
         //This if statement represents hall three

         let k = prompt(question);
            if (k == "north") {
                alert(monster);
            } else if (k == "south") {
                alert("You found the treasure room.")
                
                //This if statement represents the treasure room

                let l = prompt(roomPrompt);

                        if (l == "1" || l == "5" || l =="8") {
                                alert(monster);
                        } else if (l == "2" || l == "7" || l == "4") {
                                alert(nothing);
                        } else if (l == "9") {
                                alert("You found the Treasure. YOU WIN!");
                        } else if (l == "3") {
                                alert(escape);
                        } else {
                                alert(end);
                        }

            } else if (k == "east" || k == "west"){
                alert(nothing);
            } else {
                alert(end);
            }
    
        } else {
         alert(end)
     }

    } else {
    alert(end);
}
