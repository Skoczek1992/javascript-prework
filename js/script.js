
let argButtonName, buttonPaper, buttonRock, buttonScissors;


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

buttonScissors = document.getElementById('play-scissors');
buttonPaper = document.getElementById('play-paper');
buttonRock = document.getElementById('play-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); printMessage('kamień został kliknięty'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); printMessage('papier został kliknięty'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); printMessage('nożyce zostały kliknięte'); });


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
  } else (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
    printMessage('Przegrywasz :(');
}


buttonRock.addEventListener('click', function(){
    buttonClicked('kamień')
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier')
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce')
    });
  })
})
