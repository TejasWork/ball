let player = document.getElementById('player')
let keys = [];
let x = 0;
let y = 0;
let gravity = 0.01;
let ay = 0;
let speed = 0.2;
let falling_time = 0;
let jump_vel = 0.7;
let rotation = 0;

window.addEventListener('keydown', (event) => {
    keys[event.key] = true;
}, false);

window.addEventListener('keyup', (event) => {
    keys[event.key] = false;
}, false);

setInterval(function(){
    falling_time += 1;
    y += -gravity*falling_time + ay;

    if (keys['ArrowLeft']){
        x -= speed;
        rotation -= speed/2.5;
        player.style.transform = 'rotate(' + rotation + 'rad)'
    }
    if (keys['ArrowRight']){
        x += speed;
        rotation += speed/2.5;
        player.style.transform = 'rotate(' + rotation + 'rad)'
    }

    if (rotation > 6.8 || rotation < -6.8){
        rotation = rotation - 6.8*parseInt(rotation/6.8);
    }

    if (y < 0){
        y = 0;
        falling_time = 0;
    }

    if (falling_time == 0){
        if (keys[' ']) {
            ay = jump_vel;
        }
        else {
            ay = 0;
        }
    }

    player.style.bottom = y + 'vw';
    player.style.left = x + 'vw';
}, 0)