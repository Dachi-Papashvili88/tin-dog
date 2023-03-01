import dogs from "./data.js";
import Dog from "./Dog.js";

let likedBtn = document.getElementById("heart");
let rejectBtn = document.getElementById("cross");

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);

/*
document.getElementById("heart").addEventListener("click", yes);
render(); */

document.getElementById("heart").addEventListener("click", function () {
  currentDog.setMatchStatus(true);
  likedBtn.classList.add("liked");
  render();
  nextDog();
});

document.getElementById("cross").addEventListener("click", function () {
  rejectBtn.classList.add("rejected");
  currentDog.setMatchStatus(true);
  render();
  nextDog();
});

render();

function render() {
  document.getElementById("container").innerHTML = currentDog.getDogsHtml();
}

function nextDog() {
  currentDogIndex += 1;
  currentDog = new Dog(dogs[currentDogIndex]);
  render();
  setTimeout(() => {
    rejectBtn.classList.remove("rejected");
    likedBtn.classList.remove("liked");
  }, 300);
}

/*
function yes() {
  currentDog.setMatchStatus(true);
  nextDog();
}


function liked() {
  if (this.hasBeenLiked) {
  }
}
liked(); */
