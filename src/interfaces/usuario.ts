interface Usuario {
  // Só se tem a def do que precisa ter nesta interface
  id: number;
  nome: string;
  email: string;
  senha?: string; // ? == opcional
  // funcao: (a: number, b: number) => boolean;
}

const usu1: Usuario = {
  id: 1,
  nome: "Amália",
  email: "am@gmail.com",
};

// TORNAR ATRIBUTOS DE UMA INTERFACE OPCIONAIS
const usuOpcional: Partial<Usuario> = {
  id: 223,
  nome: "meu opcional",
};

// TORNAR TODOS OS ATRIBUTOS DE UMA INTERFACE OBRIGATÓRIOS
const usuObrigatorio: Required<Usuario> = {
  id: 3334,
  nome: "Usuário Obrigatório",
  email: "obrigatorio@gmail",
  senha: "123456",
};
console.log("Usuário normal:", usu1);
console.log("Usuário opcional:", usuOpcional);
console.log("Usuário obrigatório:", usuObrigatorio);

export {};
