const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
var speaking = false

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = speechSynthesis.getVoices();
  Array.prototype.forEach.call(voices, voice => {
      let opt = document.createElement('option');
      opt.value = voices.indexOf(voice)
      opt.innerHTML = `${voice.name} (${voice.lang})`;
      voicesDropdown.add(opt);
  })
  
  voicesDropdown.selectedIndex = 1

}

function setVoice() {
  msg.voice = voices[voicesDropdown.selectedOptions[0].value];
  speak(speaking)
}

function speak(start = true) {
  if (speaking) { 
    speaking = false;
    speechSynthesis.cancel()
  }

  if (start) {
    speaking = true
    speechSynthesis.speak(msg)
  }
  
}

function setOption() {
  msg[this.name] = this.value
  speak(speaking)
}

voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change',setOption))
speechSynthesis.addEventListener('voiceschanged',populateVoices)
stopButton.addEventListener('click', () => speak(false))
speakButton.addEventListener('click',speak)

