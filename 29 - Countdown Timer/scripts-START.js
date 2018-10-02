const timeLeft = document.querySelector('.display__time-left')
const endTime  = document.querySelector('.display__end-time')
const timerButtons = document.querySelectorAll('.timer__button')

function countdown(seconds) {
    if (seconds <= 0 ) { return }
    displayCountdown(seconds)
    end = new Date
    end.setSeconds(end.getSeconds() + seconds)  
    endTime.textContent = `Due back at ${end.toISOString().substr(11,5)}`
    let timer = setInterval(
        ()=> {
            const timeRemaining = Math.abs(Math.round((end - Date.now())/1000))
            timeRemaining > 0 ? null : clearInterval(timer)
            displayCountdown(timeRemaining)
        },1000
    )
}

function displayCountdown(seconds){
    var date = new Date(1000 * seconds)    
    var result = date.toISOString().substr(11,8)
    timeLeft.textContent = result
    document.title = result
}

timerButtons.forEach(button => button.addEventListener('click',function(){countdown(parseInt(this.dataset.time))}))
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    countdown(this.minutes.value * 60);
    this.reset();
})