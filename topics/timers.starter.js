/*
  __  .__                             
_/  |_|__| _____   ___________  ______
\   __\  |/     \_/ __ \_  __ \/  ___/
 |  | |  |  Y Y  \  ___/|  | \/\___ \ 
 |__| |__|__|_|  /\___  >__|  /____  >
               \/     \/           \/ 
*/

// 1 — start a timer and show a ⏰ in #clock after 10 seconds
let clockTimeout = setTimeout(() => {
  document.getElementById('clock').innerText = '⏰';
}, 10000);

// 2 — click the start button to show a ticking clock in #timer that goes up every second
// clicking stop should clear and stop the timer and reset the clock to 0
let timerInterval;
function startTimer() {
  let counter = 0;
  document.getElementById('timer').innerText = counter;
  timerInterval = setInterval(() => {
      counter++;
      document.getElementById('timer').innerText = counter;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById('timer').innerText = 0;
}

// Image Slideshow

// 3 — create an image gallery that shows a new image every 5 seconds and repeats that cycle
// use the images gallery1.jpg, gallery2.jpg, gallery3.jpg in the images/timers_intervals folder
// use only one img tag in the html and change its src attribute (#slideshow)
const images = [
  'images/timers_intervals/gallery1.jpg',
  'images/timers_intervals/gallery2.jpg',
  'images/timers_intervals/gallery3.jpg'
];
let currentImageIndex = 0;
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('slideshow').src = images[currentImageIndex];
}
setInterval(changeImage, 5000);

