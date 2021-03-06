{
let argButtonName;


//opis funkcji

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

const buttonScissors = document.getElementById('play-scissors');
const buttonPaper = document.getElementById('play-paper');
const buttonRock = document.getElementById('play-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

//opis funkcji

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Chodziło Ci o "kamień"?.');
    return 'kamień';
  }
}


//wynik gry

function displayResult(argPlayerMove, argComputerMove) {
  console.log('funkcja z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  } else if( argComputerMove == 'kamień' && argPlayerMove == '4'){
    printMessage('nieznany ruch!');
  } else printMessage('Przegrywasz :(');
}

}
