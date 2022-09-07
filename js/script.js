import Countdown from "./countdown.js";

  const tempoRestante = new Countdown("30 September 2022 23:59:59 GMT-0300");
  const display = document.querySelectorAll("[data-time]");

function showTimer(){
  
  display.forEach((tempos, index) => {
    tempos.innerHTML = tempoRestante.total[index];
  })

}

showTimer();
setInterval(showTimer, 1000);