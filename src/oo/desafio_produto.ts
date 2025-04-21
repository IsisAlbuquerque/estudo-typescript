class Produto {
  constructor(readonly id: number, readonly nome: string, readonly preco: number, readonly desconto: number = 0) {
    if (id <= 0) throw new Error("ID inválido!");
    if (nome.length < 2) throw new Error("Nome muito pequeno!");
    if (nome.length > 100) throw new Error("Nome muito grande!");
    if (preco <= 0) throw new Error("Preco inválido!");
    if (desconto < 0 || desconto > 0.8) throw new Error("Desconto inválido!");
  }

  // Se não precisa de parâmetro, pode-se fazer um getter; do contrário, faça um método!
  get precoFinal() {
    return this.preco * 1 - this.desconto;
  }
}

const p1 = new Produto(1, "Caneta", 12.5, 0.1);
const p2 = new Produto(2, "Notebook", 5790);

console.log(p1, "\nPreço final:", p1.precoFinal);
console.log(p2, "\nPreço final:", p2.precoFinal);
export {};
