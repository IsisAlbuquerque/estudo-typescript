let nota: number | string = 10; /* É possível permitir mais de um tipo de variávela uma variável */

console.log("nota:", nota);

type NotaOuConceito = number | "A" | "B" | "C" | "D" | "E" | "F"; /* E também valores/conceitos específicos */

let n1: NotaOuConceito = 10;
n1 = "C";
console.log("n1:", n1);

/* Para fazer checagem de tipos... */
function imprimirNota(nota: NotaOuConceito): void {
  if (typeof nota == "number") {
    return console.log(`Nota: ${nota}`);
  }
  return console.log(`Conceito: ${nota}`);
}

imprimirNota(n1);
