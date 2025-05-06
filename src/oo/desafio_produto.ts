import Validador from "./validador";

class Produto {
  constructor(readonly id: number, readonly nome: string, readonly preco: number, readonly desconto: number = 0) {
    Validador.maiorQueZero(id, "ID inválido!"); //Validador é o membro estático desta classe, ele pode ser chamado sem instanciar a classe
    Validador.tamanhoEntre(nome, 2, 250, "Nome inválido!");
    Validador.maiorQueZero(preco, "Preço inválido!");
    Validador.entre(desconto, 0, 0.8, "Desconto inválido!");
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
