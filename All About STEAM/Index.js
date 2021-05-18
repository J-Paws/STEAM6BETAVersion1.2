const main = document.querySelector('.main');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const button = document.querySelector('.button');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
  main,
  1,
  {height: '0%'},
  {height: '100%', ease: Power2.easeInOut}
).fromTo(
  main,
  1.2,
  { width: "50%" },
  { width: '100%', ease: Power2.easeInOut}
).fromTo(
  slider,
  1.2,
  { x: "-100%"},
  { x: "0%", ease: Power2.easeInOut },
  "-=1.2"
).fromTo(
  logo,
  0.5,
  { opacity: 0, x: 30 },
  { opacity: 1, x: 0 },
  "-=0.5"
).fromTo(
  headline,
  0.5,
  { opacity: 0, x: -100, y: -20 },
  { opacity: 1, x: -150, y: -20 },
  "-=0.5"
).fromTo(
  button,
  0.4,
  { opacity: 0, x: -50, y:5 },
  { opacity: 1, x: 0, y:5 },
  "-=0.5"
)
