var number = document.querySelector(".number");

// JavaScript code goes here at the bottom
function getRandomNum() {
  return Math.floor(Math.random() * 10);

}

function showNums() {
  var nums = document.querySelectorAll(".nums");
  var i;

  for (var i = 0; i < nums.length; i++) {
      nums[i].innerHTML = getRandomNum();
  }

}

showNums(getRandomNum());


// function showNombers() {
//
// }
