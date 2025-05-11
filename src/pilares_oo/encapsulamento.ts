class Carro {
  private velocidadeAtual: number = 0;
  protected readonly VELOCIDADE_MAXIMA: number = 200;

  constructor(public nome: string) {}

  get velocidade() {
    return this.velocidadeAtual;
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  protected alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
      this.velocidadeAtual = novaVelocidade;
    }
  }
}

const c1 = new Carro("Fusca");
c1.acelerar();
c1.acelerar();
c1.acelerar();
console.log(c1);
console.log(c1.velocidade);

export {};
