"use strict";

//Add eventlistener to button on the main page

document.getElementById("mainButton").addEventListener("click", enterMainHall);


//This is the function that represents the main hall
function enterMainHall() {

//This changes the intro paragraph into a new one.
let para = document.querySelector('p');
let newPara = document.createElement('p');
newPara.innerText = "You are now in the main hall. The hall spilts off into four different directions. Please pick a direction: North, South, East, or West.";
para.parentNode.replaceChild(newPara, para);

//This code changes the button
let submitButton = document.getElementById('mainButton');
submitButton.innerText = "Submit";

//remove hidden attribute from dropdown
document.getElementById('direct').removeAttribute("hidden");

// add options to dropdown
let dropdown = document.getElementById('direct');
let optBlank = document.createElement('option');
let optNorth = document.createElement('option');
let optSouth = document.createElement('option');
let optEast = document.createElement('option');
let optWest = document.createElement('option');

optBlank.text = '';
optNorth.text = 'North';
optSouth.text = "South";
optEast.text = "East";
optWest.text = "West";

dropdown.add(optBlank, null);
dropdown.add(optNorth, null);
dropdown.add(optSouth, null);
dropdown.add(optWest, null);
dropdown.add(optEast, null);

}




