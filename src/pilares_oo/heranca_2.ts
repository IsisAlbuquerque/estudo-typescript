interface Entidade {
  id: number;
}
interface Vendavel {
  nome: string;
  preco: number;
  desconto: number;
}

/* Quando uma CLASSE herda uma interface, usa-se a palavra-chave implements */
class Produto implements Entidade, Vendavel {
  constructor(public readonly id: number, readonly nome: string, readonly preco: number, readonly desconto: number) {}

  get precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

class Servico implements Entidade, Vendavel {
  constructor(public readonly id: number, readonly nome: string, readonly preco: number, readonly desconto: number) {}
}

const p1 = new Produto(1, "Caneta", 12.5, 0.75);
console.log(p1);
console.log("Preço final:", p1.precoFinal);

let v1: Vendavel = new Produto(2, "Caneta", 12.5, 0.75);
console.log(v1);

v1 = new Servico(3, "Limpeza", 50, 0.75);
console.log(v1);

export {};
