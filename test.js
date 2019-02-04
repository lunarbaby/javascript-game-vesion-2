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

//This add text input
let hallInput = document.createElement('input');
hallInput.setAttribute('type', 'text');
newPara.appendChild(hallInput);

}