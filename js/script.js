{const playGame = function(playerInput) {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);

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