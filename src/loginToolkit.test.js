import {
  DEMO_EMAIL, DEMO_PASSWORD,
  emailNormalizado, emailValido, estaVazio,
  credenciaisValidas, mensagemDeLogin
} from "./loginToolkit";

test("emailNormalizado remove espaços e coloca em minúsculas", () => {
  expect(emailNormalizado("  Maria@PUCPR.br ")).toBe("maria@pucpr.br");
});

test("emailValido reconhece formato válido", () => {
  expect(emailValido("maria@pucpr.br")).toBe(true);
  expect(emailValido("maria")).toBe(false);
});

test("estaVazio detecta string vazia ou espaços", () => {
  expect(estaVazio("")).toBe(true);
  expect(estaVazio("   ")).toBe(true);
  expect(estaVazio("ok")).toBe(false);
});

test("credenciaisValidas compara email e senha", () => {
  expect(credenciaisValidas(DEMO_EMAIL, DEMO_PASSWORD)).toBe(true);
  expect(credenciaisValidas("MARIA@PUCPR.BR", DEMO_PASSWORD)).toBe(true);
  expect(credenciaisValidas(DEMO_EMAIL, "errada")).toBe(false);
});

test("mensagemDeLogin retorna mensagens corretas", () => {
  expect(mensagemDeLogin(true)).toBe("Acessado com sucesso!");
  expect(mensagemDeLogin(false)).toBe("Usuário ou senha incorretos!");
});
