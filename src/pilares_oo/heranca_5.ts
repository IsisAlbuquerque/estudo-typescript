/* Classes abstratas não podem ser criadas, têm que ser herdadas! */
abstract class Celular {
  ligar() {
    console.log("Em ligação...");
  }

  /* Métodos abstratos obrigam os filhos a implementar estes métodos! */
  abstract acessarRedeMovel(): void;
}

class IPhone23Pro extends Celular {
  acessarRedeMovel(): void {
    console.log("Acessando rede 5G...");
  }
}

// let c1 = new Celular(); // aqui dá erro, pois a classe Celular é abstrata
// c1.ligar();

let c1 = new IPhone23Pro();
c1.ligar();
export {};
