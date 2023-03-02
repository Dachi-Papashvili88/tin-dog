class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(bool) {
    this.hasBeenSwiped = bool;
    this.hasBeenLiked = true;

  }

  getDogsHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div>
        <img id="dog-image" src="${avatar}" />
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
        <img class="like hidden" id="like" src="images/badge-like.png">
        <img class="nope hidden" id="nope" src="images/badge-nope.png">
        </div>
    `;
  }
}

export default Dog;
