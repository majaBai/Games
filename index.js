
var gLevel
var gScore
var gLines
var LEVEL_2_LINES = [0, 1, 4, 16, 32, 48, 64, 80]
var LEVEL_2_DROPTIME = [0, 0.75, 0.5, 0.33, 0.25, 0.2, 0.1, 0.05]


function startGame () {
    console.log('start game')
    framework.start()

    gLevel = 1
    gScore = 0
    gLines = 0

    onGameStateChange()
}

function onGameStateChange () {
    gameplay.dropTime = LEVEL_2_DROPTIME[gLevel]
    document.querySelector('.score').value = gScore
    document.querySelector('.level').value = gLevel
}

gameplay.onGameOver = function() {
    alert(`Game over!\nLevel: ${gLevel}\nScore: ${gScore}`)
    startGame()
}
gameplay.onLineClear = function(lines) {
    gScore += Math.floor(10 * lines * Math.pow(1.2, (lines - 1)));
    gLines += lines;
    if (gLines > LEVEL_2_LINES[gLevel] && gLevel + 1 < LEVEL_2_LINES.length) {
        ++gLevel;
    }

    onGameStateChange();
};
framework.setup(document.querySelector('#game-area'))
startGame()