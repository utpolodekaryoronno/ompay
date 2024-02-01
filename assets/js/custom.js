$(document).ready(function(){
    // Mobile Menu Icon
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.menu ul').slideToggle();
   });

});






// Tab-Pane change function
function tabChange() {
   var tabs = $(".nav-tabs > li");
   var active = tabs.filter(".active");
   var next = active.next("li").length
      ? active.next("li").find("a")
      : tabs.filter(":first-child").find("a");
   next.tab("show");
}

$(".tab-pane").hover(
   function () {
      clearInterval(tabCycle);
   },
   function () {
      tabCycle = setInterval(tabChange, 5000);
   }
);

// Tab Cycle function
var tabCycle = setInterval(tabChange, 5000);

// Tab click event handler
$(function () {
   $(".nav-tabs a").click(function (e) {
      e.preventDefault();
      clearInterval(tabCycle);
      $(this).tab("show");
      tabCycle = setInterval(tabChange, 5000);
   });
});


$('.owl-carousel').owlCarousel({
   autoplay: true,
   center: true,
   autoWidth: true,
   loop: true,
   margin: 50,
   items:1,
   autoplaySpeed: 3000,
   nav: false,
   dots:false,
 });