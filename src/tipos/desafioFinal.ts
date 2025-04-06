// type ContaCorrente (num, saldo, movimentar)
type ContaCorrente = {
  idConta: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

// type Cliente (nome, email, contas[]> contacorrente)
type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

/* Externalizando a função que terá código repetido */
function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}
// lista de clientes
let clientes: Cliente[] = [
  {
    nome: "Amália",
    email: "am@gmail.com",
    contas: [
      {
        idConta: 1,
        saldo: 100,
        movimentar,
      },
      {
        idConta: 234,
        saldo: 200.1,
        movimentar,
      },
    ],
  },
  {
    nome: "Jurema",
    email: "ju@zmail.com",
    contas: [
      {
        idConta: 471,
        saldo: 300,
        movimentar,
      },
    ],
  },
];

//movimentarConta (numConta: number, valor:number)
// passar a lista de clientes por movimentarConta p/ ver se bate c/ o numero
function movimentarConta(numConta: number, valor: number) {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.idConta === numConta);
    })
    .filter((c) => c)[0]; // filtro para tirar o undefined
  //   console.log(conta);
  conta?.movimentar(valor); //verifica se a conta existe e aciona a movimentação
  //   console.log("conta", conta);
}

function consultarSaldo(numConta: number): number | null {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.idConta === numConta);
    })
    .filter((c) => c)[0]; // filtro para tirar o undefined

  return conta?.saldo ?? null;
}

movimentarConta(471, 830.21);
console.log(consultarSaldo(471));
