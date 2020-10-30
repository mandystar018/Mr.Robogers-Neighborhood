//Business logic
function mrRobo(input){
  let newArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes("3")) {
      newArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")){
      newArray.push("Boop!");
    } else if (i.toString().includes("1")){
      newArray.push("Beep!");
    } else {
    newArray.push(i);
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