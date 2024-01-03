const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".game-over");

const jumpSound = new Audio();
jumpSound.src = "./sons/jump.m4a";

const overSound = new Audio();
overSound.src = "./sons/over.m4a";

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
  jumpSound.play();
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", " ");

  if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 110) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `-110px`;
    mario.src = "./assets/game-over.png";
    mario.style.width = "50px";
    mario.style.marginLeft = "50px";
    mario.style.animation = "game-over 1s ease-out";
    overSound.play();

    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);
