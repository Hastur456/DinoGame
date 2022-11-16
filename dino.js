const dino = document.getElementById('trex');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout(function() {
        dino.classList.remove('jump')}, 600
    );
}   

setInterval(function () {
    const dinosTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinosTop >= 100) {
        alert('Game Over')
    }
}, 10);
