// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for the species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define the Cat class, which extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method specific to Cat
  purr() {
    console.log("purr");
  }
}

// Define the Dog class, which extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method specific to Dog
  bark() {
    console.log("woof");
  }
}

// Test case for Cat class
let cat = new Cat("Siamese");
console.log(cat.species); // Should print "Siamese"
cat.makeSound(); // Should print "The Siamese makes a sound"
cat.purr(); // Should print "purr"

// Test case for Dog class
let dog = new Dog("Bulldog");
console.log(dog.species); // Should print "Bulldog"
dog.makeSound(); // Should print "The Bulldog makes a sound"
dog.bark(); // Should print "woof"