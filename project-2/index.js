/** @format */
$(".question").click(function () {
    $(this).next().animate({
        width: [ "toggle", "" ],
        height: [ "toggle", "swing" ],
        opacity: "toggle"
      }, 300, "linear", function() {
      });
    $(this).children().toggleClass("collapse");

});


// $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });

   $(this).next().slideToggle("fast");