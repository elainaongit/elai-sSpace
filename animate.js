const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext("2d")
const eyes = document.querySelector('.eyes')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight 

let particlesArray

let mouse = {
    x: -125,
    y: -125
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
})

window.addEventListener('mouseout', (event) =>{
    mouse.x = -125
    mouse.y = -125
})

class Particles {
    constructor (x, y, directionX, directionY) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
    }
    draw () {
        ctx.beginPath()
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
    }
    update() {
        // check if particle beyon the screen so turn it back
        if(this.x > canvas.width || this.x  < 0) {
            this.directionX = -this.directionX
        }
        if(this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY
        }

        //move the particle
        this.x += this.directionX
        this.y += this.directionY

        this.draw()
    }
}

particlesArray = []

//calculate how many particles should render
numberOfParticles = window.innerHeight * window.innerWidth / 8000

function generateParticlesArray() {
    for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.floor((window.innerWidth * Math.random()) - Math.random())
        let y = Math.floor((window.innerHeight * Math.random()) - Math.random())
        let directionX = Math.floor((Math.random() -0.5) * 0.5)
        let directionY = Math.floor((Math.random() -0.5)* 0.5)
        if(directionX == 0 && directionY == 0) {
            directionX = Math.random()
            directionY = Math.random()
        }
        particlesArray.push( new Particles(x, y,directionX, directionY))
    }
}

function animate() {
    requestAnimationFrame(animate)
    canvas.width = innerWidth
    canvas.height = innerHeight
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    for (let i = 0; i < particlesArray.length; i++ ) {
        particlesArray[i].update() 
    }
    connector()
}

function connector() {
// calculate start/ end point 
    for(let a = 0; a < particlesArray.length; a++){
        for (let b = a; b < particlesArray.length; b++){ 

            let distance = Math.sqrt(Math.pow(particlesArray[a].x - particlesArray[b].x, 2) 
            + Math.pow(particlesArray[a].y - particlesArray[b].y, 2))

            if (distance < 100 ) {
                ctx.beginPath()
                ctx.strokeStyle = "rgba(0, 0, 0," + distance / 1000 + ")"
                ctx.lineWidth = 1
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
        let mouseDistance = Math.sqrt(Math.pow(particlesArray[a].x - mouse.x,2) 
        + Math.pow(particlesArray[a].y - mouse.y, 2))
        if( mouseDistance < 110) {
            ctx.beginPath()
            ctx.strokeStyle = "rgba(0, 0, 0," + mouseDistance / 550 + ")"
            ctx.lineWidth = 1
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }
}

generateParticlesArray()
animate()

function randomCharacter() {
    let character = ['e','*','#','&','^','l','n','a','$','%']
    let outPut =''
    for (let i = 0; i < 7; i++) {
        let ramdomize = Math.floor(Math.random() * character.length)
        outPut += character[ramdomize]
    }
    eyes.innerHTML = outPut
}


setInterval(() => { 
    randomCharacter()
}, 100);