// Convencionalmente, nomes de classes iniciam com maiúscula
class Curso {
  private myID: number | undefined; // Atributo privado, não é possível ser acessado fora da classe
  public nome: string | undefined; // Atributo público

  /* Métodos getters e setters*/
  get id() {
    return this.myID;
  }

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Define o ID do curso, somente se for maior que zero.
   * @param id Novo ID do curso
   */
  /*******  36f734ce-94e0-4010-83ec-fbe0315eefa3  *******/
  set id(id: number | undefined) {
    if ((id ?? 0) > 0) this.myID = id;
  }
}

const c1 = new Curso();
c1.id = 1;
c1.nome = "Iniciando com TypeScript";
console.log("C1:", c1);
console.log("C1 ID:", c1.id);
