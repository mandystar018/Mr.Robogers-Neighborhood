const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [];
function mrRobo (element) {
  for( let i = 0; numbers.length; i++) {
  if (element === numbers[i]) {
    newArray.push("Beep!");
  } else if (element === numbers.indexOf(2)){
    newArray.push("Boo!");
  }
  }
};

console.log(mrRobo(1));