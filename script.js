//user rolls dice
//generate random dice roll
//display dice roll
// check if it is a 1
//either switch player or add dice roll to current score
//display new score

//user holds score
//add current score to total
//check if score is less than 100
//if no, switch player, if yes, player wins

//user resets game
//set all score to zero
//set player 1 as starting player

// -------------------------------------------



//selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")

let scores, currentScore, activePlayer, playing;
//set starting conditions

const initial = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0
    current1El.textContent = 0

    diceEl.classList.add("hidden")
    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player0El.classList.add("player--active")
    player1El.classList.remove("player--active")

}
initial()

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    //using toggle will remove if it is there and add if not
    //change backgrounds
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
    if (playing) {
        //1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        //2. Display the dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`

        //3. Check for rolled one, if true, switch to next player
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

        } else {
            switchPlayer()
        }
    }
})

//hold current score

btnHold.addEventListener("click", function () {
    if (playing) {
        // 1. add score to total score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        // 2. check if score is less than 100
        // 3. if score is 100, player wins
        if (scores[activePlayer] >= 100) {
            //finish game
            playing = false
            diceEl.classList.add("hidden")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        } else {
            // 4. if score less than 100, switch player
            switchPlayer();
        }
    }
})

// new game

btnNew.addEventListener("click", function () {
    initial()
})

