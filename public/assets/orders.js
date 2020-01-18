$(document).ready(function() {
  $.ajax({
    url: "/allOrders"
  }).then(function(data) {
    console.log("burgers front end", data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].devoured === 1) {
        const h3 = $("<h3>").text(data[i].order_text);
        $(".eaten").append(h3);
      } else {
        const h3 = $("<h3>").text(data[i].order_text);
        const button = $("<button>").text("devour it");
        button.attr("name", data[i].id);
        button.attr("class", "devour");
        $("#orders").append(h3, button);
      }
    }
  });

  $(document).on("click", ".devour", function() {
    console.log("you got clicked");

    $.ajax({
      url: "/update/" + $(this).attr("name"),
      type: "PUT"
    }).then(function(data) {
      console.log(data);
      window.location.reload();
    });
  });

  $(document).on("click", "#saveBurger", function() {
    console.log("you got clicked");

    const newBurger = { burgerName: $("#burgerName").val() };

    $.ajax({
      url: "/",
      type: "POST",
      data: newBurger
    }).then(function(data) {
      console.log(data);
      window.location.reload();
    });
  });
});
