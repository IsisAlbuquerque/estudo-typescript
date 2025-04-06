/* "Never" em uma função é um tipo que não vai aceitar nenhum retorno(return)! */
function falhar(msg: string): never {
  if (msg.length > 10) {
    throw new Error(msg);
  } else {
    throw new Error(msg);
  }
}
