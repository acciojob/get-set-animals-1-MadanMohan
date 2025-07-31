// Base class: Animal
class Animal {
  constructor(species) {
    this._species = species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Subclass: Cat
class Cat extends Animal {
  constructor(species) {
    super(species); // Call Animal constructor
  }

  purr() {
    console.log("purr");
  }
}

// Subclass: Dog
class Dog extends Animal {
  constructor(species) {
    super(species); // Call Animal constructor
  }

  bark() {
    console.log("woof");
  }
}
