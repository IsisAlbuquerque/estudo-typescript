class DesafioEstatico {
  valor: number = 1000; // atributo de instância - p/ acessar precisa criar instância!

  // método de class (estático)
  // ñ alcança atributos de instância, se ñ existe instância
  static executar() {
    const instancia = new DesafioEstatico();
    // Imprimir valor de nota no console
    console.log(instancia.valor);
  }
}

DesafioEstatico.executar();
