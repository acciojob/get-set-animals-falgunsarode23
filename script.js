// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log a sound (you can customize this in subclasses)
  makeSound() {
    console.log("Some generic animal sound");
  }
}

// Cat class that extends Animal
class Cat extends Animal {
  constructor() {
    super("Cat"); // Set the species to 'Cat'
  }

  // Method to log "purr" sound
  purr() {
    console.log("purr");
  }

  // Override the makeSound method
  makeSound() {
    console.log("Meow");
  }
}

// Dog class that extends Animal
class Dog extends Animal {
  constructor() {
    super("Dog"); // Set the species to 'Dog'
  }

  // Method to log "woof" sound
  bark() {
    console.log("woof");
  }

  // Override the makeSound method
  makeSound() {
    console.log("Bark");
  }
}

// Example usage
const myCat = new Cat();
console.log(myCat.species); // Cat
myCat.makeSound(); // Meow
myCat.purr(); // purr

const myDog = new Dog();
console.log(myDog.species); // Dog
myDog.makeSound(); // Bark
myDog.bark(); // woof
