// Convencionalmente, nomes de classes iniciam com maiúscula
class Curso2 {
  // readonly id: number; // Atributo privado, não é possível ser acessado fora da classe
  public nome?: string; // Atributo público, setado como OPCIONAL

  /* Construtor */
  constructor(readonly id: number) {
    // é o mesmo que setar este atributo fora do construtor
    this.id = id;
    if (id < 1) throw new Error("ID inválido!");
  }
}

const c2 = new Curso2(2);
c2.nome = "Iniciando com TypeScript";
console.log("C2:", c2);
console.log("C2 ID:", c2.id);

const c3 = new Curso2(456);
console.log("C3:", c3);
