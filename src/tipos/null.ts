type User = { nome: string; email: string };

const usuarios: User[] = [
  { nome: "Amália", email: "am@gmail.com" },
  { nome: "Joaquim", email: "jo@gmail.com" },
  { nome: "Jimena", email: "ji@gmail.com" },
  { nome: "Heloísa", email: "he@gmail.com" },
];

/* Null aqui é utilizado para o caso de nenhuma informação ser encontrada */
function buscarPorEmail(email: string): User | null {
  return usuarios.find((usu) => usu.email === email) ?? null;
}

let emailUsu = "ji@gmail.com";
console.log(`Retorno de buscaPorEmail para o email ${emailUsu} `, buscarPorEmail(emailUsu));

emailUsu = "aleatorio@zmail.com";
console.log(`Retorno de buscaPorEmail para o email ${emailUsu} `, buscarPorEmail(emailUsu));
