import { saudacao, multiplicar, multiplicarPerigosa } from "../../src/tipos/funcoes";

test("Deve retornar uma saudação baseada na hora atual", () => {
  const nome: string = "Meliona";
  const s = saudacao(nome);
  expect(s).toBe(`Olá, ${nome}! Passar bem!`);
});

test("Deve multiplicar n1 por n2", () => {
  const n1: number = 2;
  const n2: number = 3;
  const retorno = multiplicar(n1, n2);
  expect(retorno).toBe(6);
});

test("Deve retornar NaN com parâmetro do tipo string", () => {
  const n2: number = 3;
  const retorno = multiplicarPerigosa("a", n2);
  expect(retorno).toBeNaN();
});
