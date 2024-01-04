const playGame = function(playerInput) {
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    let playerMove = getMoveName(playerInput);


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

}

const paperBtn = document.getElementById("play-paper"); 
const rockBtn = document.getElementById("play-rock");
const scissorsBtn = document.getElementById("play-scissors");

paperBtn.addEventListener("click", function(){
    playGame(2);
})

rockBtn.addEventListener("click", function(){
    playGame(1);
})

scissorsBtn.addEventListener("click", function(){
    playGame(3);
})

