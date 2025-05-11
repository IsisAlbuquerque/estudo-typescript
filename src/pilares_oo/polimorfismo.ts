abstract class Animal {
  abstract emitirSom(): void;
}

class Gato extends Animal {
  emitirSom(): string {
    return "Miau!";
  }
}

class Cachorro extends Animal {
  emitirSom(): string {
    return "Au au!";
  }
}

function exibit(animal: Animal) {
  console.log(animal.emitirSom());
}

let a: Animal = new Gato();
exibit(a);

a = new Cachorro();
exibit(a);

export {};
