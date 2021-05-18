$(document).ready(function(){
  $(window).scroll(function(){
    /* Act on the event */
  if(this.scrollY > 20){
      $(".navbar").addClass("sticky")
      $(".goTop").fadeIn();
    }else{
      $(".navbar").removeClass("sticky")
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    /* Act on the event */
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

});




$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("blockquote", .5, {y:200, opacity: 0});
tl.from("#science", 1, {y:-200, opacity: 0});
tl.from(".p1", 1, {y:200, opacity: 0});
tl.from(".wrap", 2, {y:-50, opacity: 0});
tl.from("#s1", 1, {height: 0}, "=-.5");


const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky2",
  triggerHook: "onLeave",
  duration: "180%"
})
  .setPin(".sticky2")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}
});

$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("blockquote2", .5, {y:-200, opacity: 0});
tl.from("#technology", 1, {y:200, opacity: 0});
tl.from(".p2", 0.8, {y:-200, opacity: 0});
tl.from(".wrap2", 2, {y:-50, opacity: 0});
tl.from("#s2", 1, {height: 0}, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky3",
  triggerHook: "onLeave",
  duration: "180%"
})
  .setPin(".sticky3")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}
});

$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("blockquote3", .5, {y:200, opacity: 0});
tl.from("#engineering", 1, {y:-200, opacity: 0});
tl.from(".p3", 0.8, {y:200, opacity: 0});
tl.from(".wrap3", 2, {y:-50, opacity: 0});
tl.from("#s3", 1, {height: 0}, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky4",
  triggerHook: "onLeave",
  duration: "180%"
})
  .setPin(".sticky4")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}
});

$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("blockquote4", .5, {y:-200, opacity: 0});
tl.from("#arts", 1, {y:200, opacity: 0});
tl.from(".p4", 0.8, {y:-200, opacity: 0});
tl.from(".wrap4", 2, {y:-50, opacity: 0});
tl.from("#s4", 1, {height: 0}, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky5",
  triggerHook: "onLeave",
  duration: "180%"
})
  .setPin(".sticky5")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}
});

$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("blockquote5", .5, {y:200, opacity: 0});
tl.from("#maths", 1, {y:-200, opacity: 0});
tl.from(".p5", 0.8, {y:200, opacity: 0});
tl.from(".wrap5", 2, {y:-50, opacity: 0});
tl.from("#s5", 1, {height: 0}, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky6",
  triggerHook: "onLeave",
  duration: "180%"
})
  .setPin(".sticky6")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}
});
