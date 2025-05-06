interface Flexivel {
  nome: string;
  [atrib: string]: any; // permite que o objeto aceite qualquer atributo que vc queira criar
  // [chave:string]: number | string; // este delimita o tipo de atributo que pode ser criado
}

const f1: Flexivel = {
  nome: "Olivia",
  idade: 27,
  deps: [{}],
};

console.log(f1);

export {};
