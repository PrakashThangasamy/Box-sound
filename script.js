document.addEventListener('click', (event) => {
  if (event.target.matches('.flex-item')) {
    const buttonId = event.target.id;
    const audioId = buttonId.replace('button','audio');
    const audio = document.getElementById(audioId);
    if (audio.paused) {
      event.target.style.backgroundColor = "red";
      audio.currentTime = 0;
      audio.play();
    } else {
      event.target.style.backgroundColor = "";
      audio.pause();
    }
  }
});
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '1':
      document.querySelector('#button1').click();
      break;
    case '2':
      document.querySelector('#button2').click();
      break;
    case '3':
      document.querySelector('#button3').click();
      break;
    case '4':
      document.querySelector('#button4').click();
      break;
    case '5':
      document.querySelector('#button5').click();
      break;
  }
});
// setTimeout(function () {
// }, 1);

