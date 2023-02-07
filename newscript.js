var wins= 0
var loses = 0
var ties= 0

var options = ['R', 'P', 'S']

var playGame = function() {
    var userChoice = window.prompt('Enter R, P, S:');
    if (!userChoice) {
        return;
    }

    userChoice = userChoice.toLocaleUpperCase();
};

playGame();