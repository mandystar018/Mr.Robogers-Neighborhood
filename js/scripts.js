const numbers = ["0", "1", "2", 3, 4, 5, 6, 7, 8, 9];
let newArray = [];
numbers.forEach(function(element) {
  if (element === numbers.indexOf(1)) {
    newArray.push("Beep!");
  } else if (element === numbers.indexOf(2)){
    newArray.push("Boo!");
  }
});

console.log(function(1));