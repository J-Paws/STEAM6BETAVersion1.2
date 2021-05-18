$(document).ready(function() {
  $(window).scroll(function() {
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

    var first = "#90EE90",
    second = "#FFFFFF";

    $(window).on("scroll touchmove", function() {
 if ($(document).scrollTop() >= $("#first").position().top) {
 $('body').css('background', $("#first").attr("data-color"));

};
if ($(document).scrollTop() >= $("#second").position().top) {
$('body').css('background', $("#second").attr("data-color"))
};

});

});

$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#plant1", 2, {x:-200, opacity: 0});
tl.from("#plant2", 2, {x:200, opacity: 0}, "=-1");

const scene = new ScrollMagic.Scene({
  triggerElement: ".clear",
  triggerHook: "onLeave",
  duration: "130%"
})
  .setPin(".clear")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}
});


$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#observepic1", 0.5, {y:-80, opacity: 0});
tl.from("#observepic2", 0.5, {y:80, opacity: 0}, "=-0.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky2",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sticky2")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}


$(document).ready(function() {
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#describepic1", 1, {x:80, opacity: 0});
tl.from("#describepic2", 1, {x:-80, opacity: 0}, "=-1");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky3",
  triggerHook: "onLeave",
  duration: "150%"
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

tl.from("#identifypic1", 1, {x:-80, opacity: 0});
tl.from("#identifypic2", 1, {x:80, opacity: 0}, "=-1");


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

tl.from("#experimentpic1", 1, {x:80, opacity: 0});
tl.from("#experimentpic2", 1, {x:-80, opacity: 0}, "=-1");

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
});
