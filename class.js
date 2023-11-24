class Pet {
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    print() {
        console.log(`I have a pet. Its name is ${this.name}. It is ${this.age} years old.`);
    }
}

class Dog extends Pet {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    show() {
        console.log(`I have a pet. Its name is ${this.name}. It is ${this.age} years old. It is a dog and its breed is ${this.breed}.`);
    }
}

const myPet = new Pet('Fido', 5);
const myDog = new Dog('Sparky', 3, 'Golden Retriever');

myPet.print();
myDog.print();
myDog.show();