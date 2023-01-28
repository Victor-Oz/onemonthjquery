/** @format */
$(document).ready(function () {
  $("#list-items").html(localStorage.getItem("listItems"));

  $(".add-items").submit(function (event) {
    event.preventDefault();

    var item = $("#todo-list-item").val();
    if (item === "ye") {
      $("#list-items").append(
        "<li><input class='checkbox' type='checkbox'/>" +
        "  <img id='ye' class='ye' src='1.gif' /> "+
          "<a class='remove'>x</a><hr></li>"
      );
      localStorage.setItem("listItems", $("#list-items").html());
      $("#todo-list-item").val("");
    } else if (item) {
      $("#list-items").append(
        "<li><input class='checkbox' type='checkbox'/>" +
          item +
          "<a class='remove'>x</a><hr></li>"
      );
      localStorage.setItem("listItems", $("#list-items").html());
      $("#todo-list-item").val("");
    }
  });

  // $(".checkbox").change(function() {
  // console.log("Checkbox checked!");
  // })

  $(document).on("change", ".checkbox", function () {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }

    $(this).parent().toggleClass("completed");
    localStorage.setItem("listItems", $("#list-items").html());
  });

  $(document).on("click", ".remove", function () {
    $(this).parent().remove();
    localStorage.setItem("listItems", $("#list-items").html());

    // $(this).parent().slideUp()("fast", function () {
    //   // Animation complete.
    // });
  });
});
