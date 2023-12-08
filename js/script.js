let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';   
} else if (playerInput == '3') {
    playerMove = 'nożyce';   
}

if ( playerMove == 'nieznany ruch') {
    printMessage('wprowadzona akcja użytkownika jest niepoprawna. Spróbuj ponownie!!');
} else {
    printMessage('Twój ruch to: ' + playerMove);
}

if (computerMove == 'papier') {
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
} else if (computerMove == 'nożyce') {
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');
} else if (computerMove == 'kamień') {
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
}

if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
}

if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
}
  
if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
}

///////////////////////////////////////////////////////////////

if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('komputer wygrywa!');
}

if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('komputer wygrywa!');
}

if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('komputer wygrywa!');
}

///////////////////////////////////////////////////////////////

if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('remis!');
}

if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('remis!');
}
  
if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('remis!');
}