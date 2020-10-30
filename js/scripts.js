//Business logic
function mrRobo(input){
  let newArray = [];
  for (let i = 0; i <= input; i++) {
    if ((i).toString().includes("2")) {
      newArray.push("Beep!");
      console.log(newArray);
    } else if ((i).toString().includes("3")){
      newArray.push("Boop!");
    }
  }
  return newArray;
}














// User Interface logic

$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("#number").val());
    const roboResults = mrRobo(userNumber);
    $("#results").text(roboResults);
  });
});