interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
}

interface CasoDeUso {
  executar(entrada: any): any;
}

class RegistrarUsuario implements CasoDeUso {
  executar(entrada: Usuario) {
    console.log("Executando o caso de uso RegistrarUsuario");
    // throw new Error("Method not implemented.");
  }
}
const u1: Usuario = {
  id: 156,
  nome: "Vitória",
  email: "vi@gmail.com",
  senha: "ab256",
};
const casoDeUso: CasoDeUso = new RegistrarUsuario();

casoDeUso.executar(u1);

export {};
