import dogs from "./data.js";
import Dog from "./Dog.js";

let likedBtn = document.getElementById("heart");
let rejectBtn = document.getElementById("cross");
const footerDiv = document.getElementById("footer");
const headerDiv = document.getElementById("header");

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);

document.getElementById("heart").addEventListener("click", function () {
  currentDog.setMatchStatus(true);
  likedBtn.classList.add("liked");
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
  document.getElementById("main").innerHTML = currentDog.getDogsHtml();
}

function nextDog() {
  setTimeout(() => {
    currentDogIndex += 1;
    currentDog = new Dog(dogs[currentDogIndex]);
    render();

    rejectBtn.classList.remove("rejected");
    likedBtn.classList.remove("liked");

    if (currentDogIndex >= 5) {
      footerDiv.style.display = "none";
      headerDiv.style.display = "none";
      document.getElementById("main").innerHTML = `<div class"no-more-dogs">
    <h2> No more dogs...</h2>
    <img id="dog-image" src="images/bye.jpg">
    </div>`;
    }
  }, 1000);
}
