class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog class extending Animal
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}