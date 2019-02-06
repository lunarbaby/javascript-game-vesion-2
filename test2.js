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


    //Remove button
    let deleteButton = document.querySelector('button');
    deleteButton.remove();

    //Create new Buttons

    //North Button
    let northButton = document.createElement('button');
    northButton.innerText = "north";
    newPara.appendChild(northButton);
    northButton.addEventListener("click", chooseNorthPath);

    //South Button
    let southButton = document.createElement('button');
    southButton.innerText = "south";
    newPara.appendChild(southButton);
    southButton.addEventListener("click", chooseSouthPath);

    //East Button
    let eastButton = document.createElement('button');
    eastButton.innerText = "east";
    newPara.appendChild(eastButton);
    eastButton.addEventListener("click", chooseEastPath);

    //West Button
    let westButton = document.createElement('button');
    westButton.innerText = "west";
    newPara.appendChild(westButton);
    westButton.addEventListener("click", chooseWestPath);
   
//Path functions

    function chooseNorthPath(){
        let text = northButton.innerText;
        if (text == "north"){
            reloadPage();
        }    else{
            console.error("function does not work");
        }
    }
    
    function chooseSouthPath(){
        let text = southButton.innerText;
        if (text == "south"){
            poisonRoom();
        }    else{
            console.error("function does not work");
        }
    }

    function chooseEastPath(){
        let text = eastButton.innerText;
        if (text == "east"){
            escapeRoom();
        }    else{
            console.error("function does not work");
        }
    }
  
    function chooseWestPath(){
        let text = westButton.innerText;
        if (text == "west"){
            secondHall();
        }    else{
            console.error("function does not work");
        }
    }

    //A function to reload the page
    function reloadPage(){
        location.reload();
}

//Function that runs if you find exit but no treasure

function escapeRoom(){
    
    //Change paragraph from one for the hall to one for the escape roon
    let para = document.querySelector('p');
    let newPara = document.createElement('p');
    newPara.innerText = "You have found a door. You open the door and find yourself outside. GAME OVER!";
    para.parentNode.replaceChild(newPara, para);

    //Add new button

    let restartButton = document.createElement('button');
    restartButton.innerText = "Restart the game.";
    newPara.appendChild(restartButton);
    restartButton.addEventListener("click", reloadPage);

    //A function to reload the page
    function reloadPage(){
        location.reload();
    }


}

//Function that runs if you find a room with a chest with poison in it

    function poisonRoom(){
    
    //This changes the intro paragraph into a new one.
    let para = document.querySelector('p');
    let newPara = document.createElement('p');
    newPara.innerText = "You walk into the room. You notice that there is a chest in the middle of the room. You open the chest and inside is a cloud of posion gas. You died. GAME OVER";
    para.parentNode.replaceChild(newPara, para);

    //Add new button

    let restartButton = document.createElement('button');
    restartButton.innerText = "Restart the game.";
    newPara.appendChild(restartButton);
    restartButton.addEventListener("click", reloadPage);

    //A function to reload the page
    function reloadPage(){
        location.reload();
    }
    }
}

//Function that runs to get you in the second hall

function secondHall(){
    //This changes the intro paragraph into a new one.
    let para = document.querySelector('p');
    let newPara = document.createElement('p');
    newPara.innerText = "You are now a side hall. The hall spilts off into four different directions. Please pick a direction: North, South, East, or West.";
    para.parentNode.replaceChild(newPara, para);

    //Create new Buttons

    //North Button
    let northButton = document.createElement('button');
    northButton.innerText = "north";
    newPara.appendChild(northButton);
    northButton.addEventListener("click", emptyRoom);

    //South Button
    let southButton = document.createElement('button');
    southButton.innerText = "south";
    newPara.appendChild(southButton);
    southButton.addEventListener("click", trapedHall);

    //East Button
    let eastButton = document.createElement('button');
    eastButton.innerText = "east";
    newPara.appendChild(eastButton);
    eastButton.addEventListener("click", thirdHall);

     //West Button
     let westButton = document.createElement('button');
     westButton.innerText = "west";
     newPara.appendChild(westButton);
     westButton.addEventListener("click", reloadPage);

     //A function to reload the page
    function reloadPage(){
        location.reload();
    }


}

// Function that runs when the player pick a hall with an empty room at the end

function emptyRoom(){
    
    //This changes paragraph into a new one.
    let para = document.querySelector('p');
    let newPara = document.createElement('p');
    newPara.innerText = "You walk into a room. You notice that there is a chest in the back of the room. You choose to open the chest and find nothing inside. Try again.";
    para.parentNode.replaceChild(newPara, para);

    //Add new button

    let restartButton = document.createElement('button');
    restartButton.innerText = "Restart the game.";
    newPara.appendChild(restartButton);
    restartButton.addEventListener("click", reloadPage);

    //A function to reload the page
    function reloadPage(){
        location.reload();
    }
}

//The function that runs when a player pick a hall with the treasure room at the end

function treasureRoom(){
    //Change paragraph from one for the hall to one for the escape roon
    let para = document.querySelector('p');
    let newPara = document.createElement('p');
    newPara.innerText = "You have found the treasure chest. YOU WIN!";
    para.parentNode.replaceChild(newPara, para);
}

//Function that runs when the player click on a traped hall

function trapedHall(){
    
    //This changes paragraph into a new one.
    let para = document.querySelector('p');
    let newPara = document.createElement('p');
    newPara.innerText = "You walk down the hall. You run into a dead end so you decided to turn around. As you start turining around spikes come up from the floor and you die instantly. GAME OVER";
    para.parentNode.replaceChild(newPara, para);

    //Add new button

    let restartButton = document.createElement('button');
    restartButton.innerText = "Restart the game.";
    newPara.appendChild(restartButton);
    restartButton.addEventListener("click", reloadPage);

    //A function to reload the page
    function reloadPage(){
        location.reload();
    }
}

// Function that runs when the player clicks on the third hall

function thirdHall(){
    //This changes paragraph into a new one.
    let para = document.querySelector('p');
    let newPara = document.createElement('p');
    newPara.innerText = "You are in a very narrow and dark hall. The hall spilts off into four different directions. Please pick a direction: North, South, East, or West.";
    para.parentNode.replaceChild(newPara, para);

    //Create new Buttons

    //North Button
    let northButton = document.createElement('button');
    northButton.innerText = "north";
    newPara.appendChild(northButton);
    northButton.addEventListener("click", poisonRoom);
    
    //South Button
    let southButton = document.createElement('button');
    southButton.innerText = "south";
    newPara.appendChild(southButton);
    southButton.addEventListener("click", treasureRoom);

    //East Button
    let eastButton = document.createElement('button');
    eastButton.innerText = "east";
    newPara.appendChild(eastButton);
    eastButton.addEventListener("click", trapedHall);

     //West Button
     let westButton = document.createElement('button');
     westButton.innerText = "west";
     newPara.appendChild(westButton);
     westButton.addEventListener("click", emptyRoom);

     function poisonRoom(){
    
        //This changes the intro paragraph into a new one.
        let para = document.querySelector('p');
        let newPara = document.createElement('p');
        newPara.innerText = "You walk into the room. You notice that there is a chest in the middle of the room. You open the chest and inside is a cloud of posion gas. You died. GAME OVER";
        para.parentNode.replaceChild(newPara, para);
    
        //Add new button
    
        let restartButton = document.createElement('button');
        restartButton.innerText = "Restart the game.";
        newPara.appendChild(restartButton);
        restartButton.addEventListener("click", reloadPage);
    
        //A function to reload the page
        function reloadPage(){
            location.reload();
        }
        }
    }

