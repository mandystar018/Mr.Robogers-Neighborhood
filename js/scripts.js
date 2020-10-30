//Business logic
function mrRobo(input){
const newArray = input.map(function(element) {
  if (element === input.includes("3")) {
  return newArray.push("Hello?");
  }
});
return element;
}
console.log(mrRobo("3"));














// User Interface logic

$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#number").val();
    const roboResults = mrRobo(userNumber);
    $("#result").text(roboResults);
  });
});