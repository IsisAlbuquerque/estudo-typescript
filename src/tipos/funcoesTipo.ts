let op: () => void; /* declarando uma função sem parâmetros e sem retorno */

let operacao: (a: number, b: number) => number; /* operacao é declarada como VARIÁVEL que só aceita associação de funções neste formato! */

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

operacao = somar; // a variável "operação" aceita associação de funções neste formato!
console.log(`"operacao" como soma: `, operacao(2, 3));

operacao = multiplicar;
console.log(`"operacao" como multiplicação: `, operacao(2, 3));

type OperacaoFn = (
  a: number,
  b: number
) => number; /* declara um tipo de função, para que o TypeScript entenda que "operacao" aceita associação de funções neste formato! */
type NumeroOuTexto = string | number;
let op2: OperacaoFn; /* declara uma variável que aceita associação de funções deste tipo! */
