class Carro {
  private _velocidade: number = 0;

  constructor(readonly VELOCIDADE_MAXIMA: number = 200) {}

  get velocidade() {
    return this._velocidade;
  }

  public acelerar() {
    this.alterarVelocidade(5);
  }

  public frear() {
    this.alterarVelocidade(-5);
  }

  protected alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidade + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
      this._velocidade = novaVelocidade;
    } else if (novaVelocidade > this.VELOCIDADE_MAXIMA) {
      this._velocidade = this.VELOCIDADE_MAXIMA;
    } else {
      this._velocidade = 0;
    }
  }
}

class Fusca extends Carro {
  /* Construtores de CLASSES DERIVADAS devem conter uma palavra-chave super */
  constructor() {
    super(165);
  }
}

class Ferrari extends Carro {
  constructor() {
    super(355);
  }

  public acelerar(): void {
    this.alterarVelocidade(35);
  }
}

const c1: Fusca = new Fusca();
console.log("\n", c1);
c1.acelerar();
c1.acelerar();
c1.acelerar();

console.log(c1.velocidade);
console.log(c1.VELOCIDADE_MAXIMA);

const c2: Ferrari = new Ferrari();
console.log("\n", c2);
c2.acelerar();
c2.acelerar();
c2.acelerar();
console.log(c2.velocidade);
console.log(c2.VELOCIDADE_MAXIMA);
export {};
