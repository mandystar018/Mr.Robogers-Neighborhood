//Business logic
function mrRobo(input){
  let newArray = [];
  for (let i = 0; i <= input; i++) {
    if ((i).includes("1")) {
      newArray.push("Beep!");
      console.log(newArray);
    }
  }
  return newArray;
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