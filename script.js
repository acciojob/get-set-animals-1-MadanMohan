// 1. Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// 2. Cat class (extends Animal)
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// 3. Dog class (extends Animal)
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
