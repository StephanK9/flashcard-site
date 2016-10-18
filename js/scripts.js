$(document).ready(function() {
  $(".clickable").click(function() {
    $("#question").hide();
    $("#answer").show();
    $(".p").show();
  });
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#question2").toggle();
    $("#answer2").toggle();
  });
});
