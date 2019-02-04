"use strict";

function enterMainHall() {

//This changes the intro paragraph into a new one.
let para = document.querySelector('p');
let newPara = document.createElement('p');
newPara.innerText = "You are now in the main hall. The hall spilts off into four different directions. Please pick a direction: North, South, East, or West.";
para.parentNode.replaceChild(newPara, para);

//This removes the button
let deleteButton = document.querySelector('button');
deleteButton.remove();

//This add dropdown menu
let dropdown = document.createElement('select');
let optBlank = document.createElement('option');
let optNorth = document.createElement('option');
let optSouth = document.createElement('option');
let optEast = document.createElement('option');
let optWest = document.createElement('option');


optBlank.value = '1';
optBlank.text = " ";

optNorth.value = '2';
optNorth.text = 'North';

optSouth.value = '3';
optSouth.text = "South";

optEast.value = '4';
optEast.text = "East";

optWest.value = '5';
optWest.text = "West";

dropdown.add(optBlank, null);
dropdown.add(optNorth, null);
dropdown.add(optSouth, null);
dropdown.add(optWest, null);
dropdown.add(optEast, null);
newPara.appendChild(dropdown);


// Add logic choice
// function selectpath(){
//     let i = document.querySelector('option').value
//     if (i == '2'){
//         alert("North");
//     } else if (i == '3'){
//         alert("South");
//     } else if (i == '4'){
//         alert("East");
//     } else if (i == '5'){
//         alert("West");
//     } else {
//         alert("Please pick another option.");
//     }
// }

}