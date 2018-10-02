const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
var score = 0


function popMole(hole,duration){
    //pop a mole
    holes[hole].classList.add('up')

    //drop a mole
    setTimeout(
        function() { holes[hole].classList.remove('up')},
        duration
    )
}

function moleRandomiser() {
    console.log("moooles")
    //does a mole pop
    if (Math.random() > 0.8) { return }

    //pick a random mole
    const mole = Math.floor(Math.random() * holes.length)

    //pick a random duration
    const duration = Math.floor(Math.random() * 1000)

    //execute popMole

    popMole(mole,duration)
}

function whackMole() {
    //drop the mole
    this.parentElement.classList.remove('up')
    //increment score
    score += 1
    scoreBoard.textContent = score
}

function startGame() {
    //reset
    score = 0
    scoreBoard.textContent = score
    //set game parameters
    let gameTime  = 10000
    const moleDelay = 500
    const session = setInterval(
        ()=>{
            gameTime -= moleDelay
            moleRandomiser()
            gameTime <= 0 ? clearInterval(session) : console.log(gameTime)
        },
        moleDelay
    )
}
    

moles.forEach(mole => mole.addEventListener('click',whackMole))



