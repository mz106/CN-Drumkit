
const boom = new Audio('sounds/boom.wav');
const clap = new Audio('sounds/clap.wav');
const hihat = new Audio('sounds/hihat.wav');
const kick = new Audio('sounds/kick.wav');
const openHat = new Audio('sounds/openhat.wav');
const ride = new Audio('sounds/ride.wav');
const snare = new Audio('sounds/snare.wav');
const tink = new Audio('sounds/tink.wav');
const tom = new Audio('sounds/tom.wav');

const paraKey = document.querySelectorAll('.container__key--small');

const soundArr = [boom, clap, hihat, kick, openHat, ride, snare, tink, tom];
console.log(paraKey)

const audioButton = document.getElementById('audio-btn');

// audioButton.addEventListener('click', () => {
//     // const play = e.target;
//     audio.play();
// })

window.addEventListener('keydown', e =>{
    const keyCode = e.which;
    

    if (keyCode === 65) {
        boom.play();
    } else if (keyCode === 83) {
        clap.play();
    } else if (keyCode === 68) {
        hihat.play();
    } else if (keyCode === 70) {
        kick.play();
    } else if (keyCode === 71) {
        openHat.play();
    } else if (keyCode === 72) {
        ride.play();
    } else if (keyCode === 74) {
        snare.play();
    } else if (keyCode === 75) {
        tink.play();
    } else if (keyCode === 76) {
        tom.play();
    }
});

const keyPlay = () => {
    for (let i = 0; i < paraKey.length; i++) {
        for (let j = 0; j < soundArr.length; j++) {
            if (i !== j) {
                continue
            } else if (i === j) {
                paraKey[i].addEventListener('click', () => {
                    soundArr[j].play();
                
                }) 
                
            }
        }
    }
};

keyPlay();
