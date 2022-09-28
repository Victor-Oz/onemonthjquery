/** @format */

$(document).ready(function () {
  // YOUR CODE HERE!
  $(".add-items").submit(function (event) {
    event.preventDefault();
   let item = $("#todo-list-item").val();
   $("#list-items").append("<li><input type='checkbox' />" + item + "<a class='remove' >x</a></li><hr>")
  });
});
