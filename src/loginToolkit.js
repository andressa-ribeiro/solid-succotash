// src/loginToolkit.js
export const DEMO_EMAIL = "maria@pucpr.br";
export const DEMO_PASSWORD = "123456";

export function emailNormalizado(v) {
    return (v || "").trim().toLowerCase();
}

export function emailValido(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
}

export function estaVazio(v) {
    return !v || v.trim() === "";
}

export function credenciaisValidas(inputEmail, inputSenha, userEmail = DEMO_EMAIL, userSenha = DEMO_PASSWORD) {
    return emailNormalizado(inputEmail) === emailNormalizado(userEmail) && inputSenha === userSenha;
}

export function mensagemDeLogin(ok) {
    return ok ? "Acessado com sucesso!" : "Usuário ou senha incorretos!";
}
