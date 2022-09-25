/** @format */
$(".question").click(function () {
    $(this).next().slideToggle("fast");
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