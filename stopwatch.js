'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  
  let startTime;
  let timeoutId;
  let elapsedTime = 0;
  
  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0').slice(0,1);
    
    timer.textContent = `${m}:${s}:${ms}`;
    
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }
  
  function ButtonStateIntial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }
  
  
  function ButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }
  
  
  function ButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }
  
  
  ButtonStateIntial();
  
  
  start.addEventListener('click', () => {
    ButtonStateRunning();
    startTime = Date.now();
    countUp();
  });
  
  stop.addEventListener('click', () => {
    ButtonStateStopped();
   clearTimeout(timeoutId);
   elapsedTime += Date.now() - startTime;
  });
  
  reset.addEventListener('click', () => {
    ButtonStateIntial();
   timer.textContent = '00:00:0';
   elapsedTime = 0;
  });
}