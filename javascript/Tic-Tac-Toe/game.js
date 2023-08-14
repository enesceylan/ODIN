// #region VARIABLES
let playerName;
let playerTwoName;
let enemyType;

const NAME_FORM = document.getElementById("name-form");
const MATCH_TITLE = document.getElementById("match-title");
const PLAYER_SCORE = document.getElementById("player-score");
const AI_SCORE = document.getElementById("ai-score");
// #endregion

// #region GAME INITIALIZATION FUNCTIONS
const setSelection = (e) => {
    e.preventDefault()

    const elem = e.target;
    elem.parentElement.querySelector(".active").classList.remove("active");
    elem.classList.add("active");
    enemyType = elem.innerText.toLowerCase();
}

document.getElementById("player").addEventListener("click", setSelection);
document.getElementById("ai").addEventListener("click", setSelection);

NAME_FORM.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        
        playerName = e.target.value;

        const GAME_BOARD = document.getElementById("game-page");

        NAME_FORM.classList.add("hide");
        GAME_BOARD.classList.remove("hide");

        // MATCH_TITLE.innerText = `${playerName} vs AI`;
    }
})
// #endregion