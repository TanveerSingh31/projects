let paintbox = document.getElementById('mycanvas')
let context = paintbox.getContext('2d')



let gameOn = true

let playerSpeed = 5

class Box {
    constructor(size, color) {
        this.size = size
        this.color = color
        this.x = 0
        this.y = 0
    }
}

class Player extends Box {
    constructor() {
        super(50, 'blue')
        this.x = 0
        this.y = 225
        this.speed = 0
    }
    move() {
        this.x += this.speed
    }
}

class Enemy extends Box {
    constructor(speed) {
        super(50, 'red')
        this.speed = speed
    }

    move() {
        this.y += this.speed;
        if (this.y + this.size > 500) {
            this.speed = -Math.abs(this.speed)
        }
        if (this.y < 0) {
            this.speed = Math.abs(this.speed)
        }

    }

    speedChange(speed) {
        this.speed = speed
    }
}

let player = new Player()
let e1 = new Enemy(4)
let e2 = new Enemy(6)
let e3 = new Enemy(8)
e1.x = 100
e2.x = 233
e3.x = 366

function changeSpeed(level) {
    if (level == 1) {
        e1.speed = 4;
        e2.speed = 6;
        e3.speed = 8;
    }
    else if (level == 2) {
        e1.speed = 6;
        e2.speed = 8;
        e3.speed = 9;
    }
    else if (level == 3) {
        e1.speed = 10;
        e2.speed = 9;
        e3.speed = 12;
    }
    else {
        e1.speed = 12;
        e2.speed = 14;
        e3.speed = 20;
    }
}

function isCollided(box1, box2) {

    if ((box1.x + box1.size) > box2.x && (box1.y + box1.size) > box2.y) {
        if (box1.x > (box2.x + box2.size)) {
            return false;
        }
        if (box1.y > (box2.y + box2.size)) {
            return false;

        }
        else {
            return true;
        }
    }


}

function drawBox(box) {
    context.fillStyle = box.color
    context.fillRect(box.x, box.y, box.size, box.size)
}

paintbox.addEventListener('mousedown', () => {
    player.speed = playerSpeed
})

paintbox.addEventListener('mouseup', () => {
    player.speed = 0
})

// setInterval(() => {
//     playerSpeed = 5 + parseInt(Math.random() * 10)
//     player.y = 100 + (Math.random() * 300)
// }, 2000)

function gameLoop() {
    if (!gameOn) {
        return;
    }
    console.log('frame update')
    context.clearRect(0, 0, 500, 500)
    e1.move()
    e2.move()
    e3.move()
    player.move()

    if (isCollided(e1, player) || isCollided(e2, player) || isCollided(e3, player)) {
        gameOn = false
        let x = window.alert('Game Over');
        if (!x)
            window.location.reload();
    }
    if ((player.x + player.size) > 500) {
        let x = alert('Congratulations, \nyou won!');
        gameOn = false;
        if (!x)
            window.location.reload();

    }
    drawBox(player)
    drawBox(e1)
    drawBox(e2)
    drawBox(e3)


    window.requestAnimationFrame(gameLoop)
}

function difficulty() {
    let difficulty = document.getElementById('difficulty')
    let value = difficulty.options[difficulty.selectedIndex].value;
    changeSpeed(value);
}

gameLoop();
