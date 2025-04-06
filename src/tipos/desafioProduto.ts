type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: () => number;
};

const produto1: Produto = {
  nome: "Lapis",
  preco: 2.5,
  desconto: 0.3,
  precoComDesconto() {
    return this.preco * (1 - this.desconto);
  },
};

console.log("Produto1:", produto1);
