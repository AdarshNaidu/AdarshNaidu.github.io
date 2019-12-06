// const gui = new dat.GUI()
const canvas = document.querySelector('#one');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 300,
    frequency: 0.01
}

// gui.add(wave, 'y', 0, canvas.height);
// gui.add(wave, 'length', -0.01, 0.01);
// gui.add(wave, 'amplitude', -300, 300);
// gui.add(wave, 'frequency', -0.01, 1);

wave.length = 0.002;
wave.amplitude = 134;

let increment = wave.frequency;
function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0, 0, 0, 0.05)';
    // c.fillRect(0, 0, canvas.width, canvas.height);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.moveTo( 0, canvas.height/2);
    for(let i = 0; i < canvas.width; i++){
        c.lineTo(i, wave.y + Math.sin(increment) * wave.amplitude * Math.sin(i * wave.length + increment));
    }
    c.lineTo(canvas.width, canvas.height);
    c.lineTo(0, canvas.height);
    c.lineTo(0, canvas.height/2);
    c.fillStyle = "white";
    c.fill();
    increment += wave.frequency;
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
















let canvas2 = document.querySelector('#two');
ctx = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = document.body.offsetHeight;
let update = canvas2.height;
let n = 10;
let rmin = Math.floor(window.innerWidth/40);
let rmax = Math.floor(window.innerWidth/20);
let vmin = 2;
let vmax = 5;
let Balls = [];

function Ball(){
    this.radius = rmin + Math.random() * (rmax - rmin);
    this.v = vmin + Math.random() * (vmax - vmin);
    this.x = this.radius + Math.random() * (innerWidth - 2 * this.radius);
    this.y = document.body.offsetHeight + this.radius;
    // this.y = Math.random() * (document.body.offsetHeight);
    this.update = function(){
        this.y -= this.v;
        if( this.y < -2*this.radius){
            this.y = document.body.offsetHeight + this.radius;
        }
    } 
}

let ball;
function init(){
    Balls = [];
    for(let i = 0; i < n; i++){
        Balls.push(new Ball());
    }
}

function animate2(){
    requestAnimationFrame(animate2);
    ctx.clearRect(0, 0, innerWidth, canvas2.height);
    ctx.beginPath();
    ctx.arc(canvas2.width/2, update, 50, 0, 2 * Math.PI);
    ctx.stroke();
    update -= 5;
    if(update < -100){
      update = document.body.offsetHeight + 50;
    }
    for(let i = 0; i < n; i++){
        let elem = Balls[i];
        ctx.beginPath();
        ctx.arc(elem.x, elem.y, elem.radius, 0, 2 * Math.PI);
        ctx.stroke();
        elem.update();
        ctx.fillStyle = "white";
        ctx.fill();
    }
    ctx.fillStyle = "white";
    ctx.fill();
}

init();
animate2();























let canvas3 = document.querySelector('#three');
ctx = canvas3.getContext('2d');
canvas3.width = window.innerWidth;
canvas3.height = document.body.offsetHeight;
let update2 = canvas3.height;
let n2 = 10;
let rmin2 = 10;
let rmax2 = 50;
let vmin2 = 2;
let vmax2 = 5;
let Balls2 = [];

function Ball2(){
    this.radius = rmin2 + Math.random() * (rmax2 - rmin2);
    this.v = -(vmin2 + Math.random() * (vmax2 - vmin2));
    this.x = this.radius + Math.random() * (innerWidth - 2 * this.radius);
    this.y = 0;
    // this.y = Math.random() * (document.body.offsetHeight);
    this.update2 = function(){
        this.y -= this.v;
        if( this.y > document.body.offsetHeight + this.radius){
            this.y = -this.radius;
        }
    } 
}

function init2(){
    Ball2s2 = [];
    for(let i = 0; i < n2; i++){
        Balls2.push(new Ball2());
    }
}

function animate3(){
    requestAnimationFrame(animate3);
    // ctx.clearRect(0, 0, innerWidth, canvas3.height);
    ctx.beginPath();
    ctx.arc(canvas3.width/2, update2, 50, 0, 2 * Math.PI);
    ctx.stroke();
    update2 -= 5;
    if(update2 < -100){
      update2 = 0;
    }
    for(let i = 0; i < n2; i++){
        let elem = Balls2[i];
        ctx.beginPath();
        ctx.arc(elem.x, elem.y, elem.radius, 0, 2 * Math.PI);
        ctx.stroke();
        elem.update2();
        ctx.fillStyle = "white";
        ctx.fill();
    }
    ctx.fillStyle = "white";
    ctx.fill();
}

init2();
animate3();