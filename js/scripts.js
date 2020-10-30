//Business logic
function mrRobo(input){
  for (let i = 0; i <= input; i++) {
    console.log(i);
  }
}














// User Interface logic

$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#number").val();
    const roboResults = mrRobo(userNumber);
    $("#result").text(roboResults);
  });
});