export function saudacao(nome: string): string {
  //   const manha: boolean = new Date().getHours() < 12;
  //   return manha ? "Bom dia!" : "Boa tarde!";
  return `Olá, ${nome}! Passar bem!`;
}

export function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

export function multiplicarPerigosa(n1: any, n2: any): number {
  return n1 * n2;
}

export function imprimirNoConsole(): void {
  console.log("Exemplo de função sem retorno.");
}

imprimirNoConsole();
