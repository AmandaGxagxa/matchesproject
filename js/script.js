var number = document.querySelector(".number");

// JavaScript code goes here at the bottom
function getRandomNum() {
  return Math.floor(Math.random() * 10);

}

let one = document.querySelector(".one")
var nums = document.querySelectorAll(".nums");

function addTwo() {
  nums[0].innerHTML === nums[1].innerHTML
}

function showNums() {
    // one = "";
  var i;

  for (var i = 0; i < nums.length; i++) {
    nums[i].innerHTML = getRandomNum();
  }

  if (nums[0].innerHTML === nums[1].innerHTML) {
    // alert("Matche found !")
    one.innerHTML = "Matche found !"
    nums[0].classList.add("matchedColor");
    nums[1].classList.add("matchedColor");

  } else if (nums[1].innerHTML === nums[2].innerHTML) {
    // alert("Matche found !")
    one.innerHTML = "Matche found !"
    nums[1].classList.add("matchedColor");
    nums[2].classList.add("matchedColor");
  }
  if (addTwo() == nums[2].innerHTML) {
    nums[0].classList.add("doubleMaches");
    nums[1].classList.add("doubleMaches");
    nums[2].classList.add("doubleMaches");
  }

}
showNums(getRandomNum());
