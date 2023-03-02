class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(bool) {
    this.hasBeenSwiped = bool;
    this.hasBeenLiked = true;
    document.querySelector("#like").classList.remove("hidden");
  }

  getDogsHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div>
        <img id="dog-image" src="${avatar}" />
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
        <img class="like hidden" id="like" src="images/badge-like.png">
        </div>
    `;
  }
}

export default Dog;
