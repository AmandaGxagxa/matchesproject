var number = document.querySelector(".number");

// JavaScript code goes here at the bottom
function getRandomNum() {
  return Math.floor(Math.random() * 10);

}
let btnElem = document.querySelector(".button")
let one = document.querySelector(".one")
var nums = document.querySelectorAll(".nums");

function addTwo() {
  nums[0].innerHTML === nums[1].innerHTML
}

function showNums() {
     // 4one = "";
  var i;

  for (var i = 0; i < nums.length; i++) {
    nums[i].innerHTML = getRandomNum();
  }

  if (nums[0].innerHTML === nums[1].innerHTML) {
    // alert("Matche found !")
    one.innerHTML = "Matche found !"
    nums[0].style.color = "green";
    nums[1].style.color = "green";

  }
  if (nums[1].innerHTML === nums[2].innerHTML) {
    // alert("Matche found !")
    one.innerHTML = "Matche found !"

    nums[1].style.color = "green";
    nums[2].style.color = "green";

    // totalFieldSettings.style.fontWeight = "bold";
  }
  // if (addTwo() == nums[2].innerHTML) {
  //   nums[0].classList.add("doubleMaches");
  //   nums[1].classList.add("doubleMaches");
  //   nums[2].classList.add("doubleMaches");
  // }

}
showNums(getRandomNum());

btnElem.addEventListener("click" , function() {
  showNums(getRandomNum());

})
