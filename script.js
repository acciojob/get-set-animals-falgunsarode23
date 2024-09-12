// Define the Animal class
class Animal {
  constructor(species) {
    this.species = species;
  }

  // Getter for the species
  getSpecies() {
    return this.species;
  }

  // Method to make a sound
  makeSound() {
    console.log("This animal makes a sound.");
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

  // Override makeSound for Cat
  makeSound() {
    console.log("Meow");
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

  // Override makeSound for Dog
  makeSound() {
    console.log("Bark");
  }
}

// Example usage:
const cat = new Cat("Feline");
console.log(cat.getSpecies()); // Output: Feline
cat.makeSound();               // Output: Meow
cat.purr();                    // Output: purr

const dog = new Dog("Canine");
console.log(dog.getSpecies()); // Output: Canine
dog.makeSound();               // Output: Bark
dog.bark();                    // Output: woof
