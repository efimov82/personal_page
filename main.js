var bntClickOn = new Audio("./sounds/click.wav" );

var about = document.getElementById('about').onmouseenter = () => {
  play(bntClickOn);
}

var portfolio = document.getElementById('portfolio').onmouseenter = () => {
  play(bntClickOn);
}

var blog = document.getElementById('blog').onmouseenter = () => {
  play(bntClickOn);
}

var contacts = document.getElementById('contacts').onmouseenter = () => {
  play(bntClickOn);
}


function play(sound) {
  sound.currentTime = 0;
  sound.play();
}
