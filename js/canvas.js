$(window).bind("load", function() {
  
  const canvas = document.querySelector("#one");
let c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 300,
  frequency: 0.01
};

let resize = (wave)=> {
  if(window.innerWidth < 500){
    wave.length = 0.008;
    wave.amplitude = 50;
    wave.frequency = 0.02;
  }else if(window.innerWidth < 1000){
    wave.length = 0.004;
    wave.amplitude = 90;
    wave.frequency = 0.02;
  }else {
    wave.length = 0.002;
    wave.amplitude = 134;
    wave.frequency = 0.01;
  }
  return wave;
}

wave = resize(wave);

let increment = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0, 0, 0, 0.05)";
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(
      i,
      wave.y + wave.amplitude * Math.sin(i * wave.length + increment)
    );
  }
  c.lineTo(canvas.width, canvas.height);
  c.lineTo(0, canvas.height);
  c.lineTo(0, canvas.height / 2);
  c.fillStyle = "white";
  c.fill();
  increment += wave.frequency;
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  wave = resize(wave);
});


  const phrases = ["Adarsh Naidu", "Developer | Student"];
  const el = document.querySelector(".anim-text");
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({
          from,
          to,
          start,
          end
        });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  const fx = new TextScramble(el);
  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();








});


