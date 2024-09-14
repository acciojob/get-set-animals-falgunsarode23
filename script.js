// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log a sound
  makeSound() {
    throw new Error("This method must be overridden in subclass");
  }
}

// Cat class that extends Animal
class Cat extends Animal {
  constructor() {
    super("Cat"); // Set the species to 'Cat'
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

  // Override the makeSound method
  makeSound() {
    console.log("Bark");
  }
}

// Example usage
const myCat = new Cat();
console.log(myCat.species); // Cat
myCat.makeSound(); // Meow

const myDog = new Dog();
console.log(myDog.species); // Dog
myDog.makeSound(); // Bark