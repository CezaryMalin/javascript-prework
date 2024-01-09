{const playGame = function(playerInput) {
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
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

}