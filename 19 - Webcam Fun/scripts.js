const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const hueControls = document.querySelectorAll('.controls .hue input')
const hueShift = { rhue: 0, bhue: 0, ghue: 0 }
const splitControls = document.querySelectorAll('.controls .split input')
const splitShift = { rsplit: 0, gsplit: 0, bsplit: 0 }

function getVideo() {

    navigator.mediaDevices.getUserMedia( {video: true, audio: false} )
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play()
        })
        .catch(err => {console.log(`Error:`,err)})
}

function paintToCanvas() {
    const {videoWidth : width , videoHeight : height } = video

    canvas.width = width;
    canvas.height = height;

    return setInterval(() => { 
        ctx.drawImage(video, 0,0,width,height);
        let pixels = ctx.getImageData(0,0,width,height);
        pixels = rgbSplitter(pixels);
        pixels = hueShifter(pixels);
        
        ctx.putImageData(pixels,0,0)
    },20)
    
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    console.log(data)
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','image');
    link.innerHTML = `<img src="${data}" alt="Photo"></img>`
    strip.insertBefore(link, strip.firstChild)
}

function hueShifter(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4 ) {
        pixels.data[i]   += hueShift.rhue
        pixels.data[i+1] += hueShift.ghue
        pixels.data[i+2] += hueShift.bhue
    }
    return pixels
}

function handleHueUpdate() {
    hueShift[this.name] = parseFloat(this.value)
    console.log(hueShift)
}

function rgbSplitter(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i  ] = pixels.data[i + 0 + splitShift.rsplit]; // RED
      pixels.data[i+1] = pixels.data[i + 1 + splitShift.gsplit]; // GREEN
      pixels.data[i+2] = pixels.data[i + 2 + splitShift.bsplit]; // Blue
    }
    return pixels;
}

function handleSplitUpdate() {
    splitShift[this.name] = 4 * (parseFloat(this.value) + canvas.width)
    console.log(splitShift)
}

hueControls.forEach(control => control.addEventListener('change',handleHueUpdate))
hueControls.forEach(control => control.addEventListener('mousemove',handleHueUpdate))

splitControls.forEach(control => control.addEventListener('change',handleSplitUpdate))
splitControls.forEach(control => control.addEventListener('mousemove',handleSplitUpdate))

getVideo();
video.addEventListener('canplay',paintToCanvas);