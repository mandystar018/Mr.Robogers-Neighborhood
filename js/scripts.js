//Business logic

let newArray = [];
function mrRobo (element) {
  for( let i = 0; element.length; i++) {
  if (i === element) {
    newArray.push("Beep!");
  } else if (i === element){
    newArray.push("Boo!");
  }
  }
};

console.log(mrRobo("0"));

// User Interface logic