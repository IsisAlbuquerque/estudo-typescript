/* Herança entre interfaces */
interface Entidade {
  id: string;
}

interface Vendavel {
  preco: number;
  desconto: number;
}

interface EntidadeComDatas extends Entidade {
  criadoEm: Date;
  atualizadoEm: Date;
  excluidoEm?: Date;
}

interface Usuario extends Entidade {
  // como é extensão, fica subentendido que uma variável de tipo "usuário" também precisa ter id
  nome: string;
  email: string;
  senha?: string;
}

/* Usando DIVERSAS ENTIDADES */
interface Produto extends EntidadeComDatas, Vendavel {}

const u1: Usuario = {
  nome: "Amália",
  email: "am@gmail.com",
  id: "123",
};

console.log(u1);

const p1: Produto = {
  id: "asd5f8-e4gf5hgf55",
  preco: 100,
  desconto: 0.01,
  criadoEm: new Date(),
  atualizadoEm: new Date(),
};

console.log(p1);

export {};
