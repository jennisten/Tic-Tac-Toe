(!function() {
document.addEventListener('DOMContentLoaded', () => {

let playerTurn; //this variable will hold a value to determine which one of the players -1- or -2- has their turn
const gameDiv = document.getElementById('board'); // board view
const body = document.querySelector('body');
let startDiv = document.createElement('div'); //start view
let winDiv = document.createElement('div'); //win view
let button = document.createElement('a'); //new game link
let startHeader = document.createElement('header');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

//create arrays to store the game situation/ chosen boxes in
let player1Table = [];
let player2Table = [];

//a function for displaying right finish view
function win(player) {
  let winHeader = document.createElement('header');
  gameDiv.style.display = 'none';
  winDiv.setAttribute('id', 'finish');
  winDiv.setAttribute('class', 'screen screen-win');
  winHeader.innerHTML = '<h1>Tic Tac Toe</h1>';
  if (player == 1) {
    winDiv.classList.add('screen-win-one');
    winHeader.innerHTML += '<p class="message">Winner!</p>';
    winHeader.innerHTML += '<a href="#" class="button">New game</a>';
  }  else if (player == 2) {
    winDiv.classList.add('screen-win-two');
    winHeader.innerHTML += '<p class="message">Winner!</p>';
    winHeader.innerHTML += '<a href="#" class="button">New game</a>';
  } else {
    winDiv.classList.add('screen-win-tie');
    winHeader.innerHTML += "<p class='message'>It's a tie</p>";
    winHeader.innerHTML += '<a href="#" class="button" id = "button">New game</a>';
  }
  body.appendChild(winDiv);
  winDiv.appendChild(winHeader);
  winHeader.addEventListener('click', () => {
    window.location.reload();
  })
}

//function for displaying the start page and hiding the game content
function displayStartPage () {
  startDiv.setAttribute('class', 'screen screen-start');
  startHeader.innerHTML = '<h1>Tic Tac Toe</h1>';
  startHeader.innerHTML += '<a href="#" class="button">Start game</a>';
  body.appendChild(startDiv);
  startDiv.appendChild(startHeader);
}
startHeader.addEventListener('click', () => {
  startDiv.style.display = 'none';
  gameDiv.style.display = '';
  player1.setAttribute('class', 'players active players-turn');
  playerTurn = 1;
});

//create a function for the eventllisteners for mouseover, mouseout and click events
function playTheGame () {
    const boxes = document.getElementsByClassName('boxes')[0];
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const box4 = document.getElementById('box4');
    const box5 = document.getElementById('box5');
    const box6 = document.getElementById('box6');
    const box7 = document.getElementById('box7');
    const box8 = document.getElementById('box8');
    const box9 = document.getElementById('box9');
    boxes.addEventListener('mouseover', () => {
      const hoverBox = event.target;
      if(!hoverBox.classList.contains('occupied')) {
        if (playerTurn == 1) {
          hoverBox.setAttribute('class', 'box box-hover-1'); //NEXT PHASE ADD A VALUE= THE VALUE OF THE CHOSEN BOX TO PLAYERS TABLE ARRAY
        }  else if (playerTurn == 2) {
          hoverBox.setAttribute('class', 'box box-hover-2');
        }
      }
  });
    boxes.addEventListener('mouseout', () => {
      const hoverBox = event.target;
      if(!hoverBox.classList.contains('occupied')) {
        hoverBox.classList.remove('box-hover-1', 'box-hover-2');
    };
  });
  //determine what should happen when a player clicks one of the boxes
  boxes.addEventListener('click', () => {
    const chosenBox = event.target;
    let playerTable;
    if(playerTurn == 1) { // who's turn is it?
      playerTable = player1Table;
    } else if (playerTurn == 2) {
      playerTable = player2Table;
    }

    // which box did the player click on, is it a win or tie or should the game continue?
    if (chosenBox.id === "box1") {
      console.log('hi there stage 1');
        if(playerTable.includes('box2') && playerTable.includes('box3')) {
            win(playerTurn);
        } else if(playerTable.includes('box4') && playerTable.includes('box7')) {
            win(playerTurn);
        } else if(playerTable.includes('box5') && playerTable.includes('box9')) {
            win(playerTurn);
        } else if (playerTable.length == 4) {
            win();
        }
      }
      if (chosenBox.id === "box2") {
        if(playerTable.includes('box1') && playerTable.includes('box3')) {
            win(playerTurn);
        } else if(playerTable.includes('box5') && playerTable.includes('box8')) {
            win(playerTurn);
        } else if (playerTable.length == 4) {
            win();
        }
      }
      if (chosenBox.id === "box3") {
        if(playerTable.includes('box1') && playerTable.includes('box2')) {
            win(playerTurn);
          } else if(playerTable.includes('box6') && playerTable.includes('box9')) {
            win(playerTurn);
          } else if(playerTable.includes('box5') && playerTable.includes('box7')) {
            win(playerTurn);
          } else if (playerTable.length == 4) {
            win();
          }
        }
      if (chosenBox.id === "box4") {
        if(playerTable.includes('box1') && playerTable.includes('box7')) {
            win(playerTurn);
        } else if(playerTable.includes('box5') && playerTable.includes('box6')) {
            win(playerTurn);
        } else if (playerTable.length == 4) {
            win();
        }
      }
      if (chosenBox.id === "box5") {
        if(playerTable.includes('box2') && playerTable.includes('box8')) {
          win(playerTurn);
        } else if(playerTable.includes('box4') && playerTable.includes('box6')) {
          win(playerTurn);
        } else if(playerTable.includes('box1') && playerTable.includes('box9')) {
          win(playerTurn);
        } else if(playerTable.includes('box3') && playerTable.includes('box7')) {
          win(playerTurn);
        } else if (playerTable.length == 4) {
            win();
        }
      }
      if (chosenBox.id === "box6") {
        if(playerTable.includes('box3') && playerTable.includes('box9')) {
            win(playerTurn);
        } else if(playerTable.includes('box4') && playerTable.includes('box5')) {
            win(playerTurn);
        } else if (playerTable.length == 4) {
            win();
        }
      }
      if (chosenBox.id === "box7") {
        if(playerTable.includes('box1') && playerTable.includes('box4')) {
            win(playerTurn);
          } else if(playerTable.includes('box8') && playerTable.includes('box9')) {
            win(playerTurn);
          } else if(playerTable.includes('box5') && playerTable.includes('box3')) {
            win(playerTurn);
          } else if (playerTable.length == 4) {
            win();
          }
        }
      if (chosenBox.id === "box8") {
        if(playerTable.includes('box2') && playerTable.includes('box5')) {
            win(playerTurn);
        } else if(playerTable.includes('box7') && playerTable.includes('box9')) {
            win(playerTurn);
        } else if (playerTable.length == 4) {
          win();
        }
      }
      if (chosenBox.id === "box9") {
        if(playerTable.includes('box3') && playerTable.includes('box6')) {
            win(playerTurn);
          } else if(playerTable.includes('box8') && playerTable.includes('box7')) {
            win(playerTurn);
          } else if(playerTable.includes('box5') && playerTable.includes('box1')) {
            win(playerTurn);
          } else if (playerTable.length == 4) {
            win();
          }
        }
    if (!chosenBox.classList.contains('occupied')) {
      if (playerTurn == 1) {
        chosenBox.setAttribute('class', 'box box-filled-1 occupied');
        player1Table.push(chosenBox.id);
        console.log(player1Table);
        playerTurn = 2;
        player2.setAttribute('class', 'players active players-turn');
        player1.classList.remove('active', 'players-turn');
      } else if (playerTurn == 2) {
        chosenBox.setAttribute('class', 'box box-filled-2 occupied');
        player2Table.push(chosenBox.id);
        console.log(player2Table);
        playerTurn = 1;
        player1.setAttribute('class', 'players active players-turn');
      player2.classList.remove('active', 'player-turn');
      }
    }
  });
}
  window.onload = function() {
    gameDiv.style.display = "none";
    displayStartPage();
    playTheGame();
   }

}); //final tag for eventlistener(DOMContentLoaded)
} ());
