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

    var first = "#16b4aa",
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

tl.from("#bubble", 0.5, {x:80, opacity: 0}, "=+1.2");

const scene = new ScrollMagic.Scene({
  triggerElement: ".clear",
  triggerHook: "onLeave",
  duration: "120%"
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

tl.from(".1-3", 1, {y:-100, opacity: 0});
tl.from(".2-4", 1, {y:100, opacity: 0}, "=-1");

const scene = new ScrollMagic.Scene({
  triggerElement: ".picsection",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".clear")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
}


});
