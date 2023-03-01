
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
      <div class="main">
          <img id="dog-image" src="${avatar}" />
          <h1>${name}, ${age}</h1>
          <p>${bio}</p>
        </div>
      
      `;
    }
  }
  
  export default Dog;
  