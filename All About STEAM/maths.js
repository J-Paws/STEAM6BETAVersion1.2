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


    var first = "#f15e4d",
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
