$(document).ready(function() {
  $("button#Cat").click(function() {
    $("ul#call").prepend("<img src='img/cat.png'>");
    $("ul#response").prepend("<img src='img/dog.jpg'>");

    $("ul#call").children("img").first().click(function() {
      $(this).remove();
    });
    $("ul#response").children("img").first().click(function() {
      $(this).remove();
    });
  });

  $("button#Dog").click(function() {
    $("ul#call").prepend("<img src='img/dog.jpg'>");
    $("ul#response").prepend("<img src='img/cat.png'>");

    $("ul#call").children("img").first().click(function() {
      $(this).remove();
    });
    $("ul#response").children("img").first().click(function() {
      $(this).remove();
    });
  });

});
