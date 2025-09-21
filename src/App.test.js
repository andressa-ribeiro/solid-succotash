import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("mostra título e campos", () => {
  render(<App />);
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("e-mail")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("senha")).toBeInTheDocument();
});

test("login com sucesso", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("e-mail"), { target: { value: "maria@pucpr.br" } });
  fireEvent.change(screen.getByPlaceholderText("senha"), { target: { value: "123456" } });
  fireEvent.click(screen.getByRole("button", { name: /acessar/i }));
  expect(screen.getByText("Acessado com sucesso!")).toBeInTheDocument();
});

test("login com erro", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("e-mail"), { target: { value: "errado@teste.com" } });
  fireEvent.change(screen.getByPlaceholderText("senha"), { target: { value: "errada" } });
  fireEvent.click(screen.getByRole("button", { name: /acessar/i }));
  expect(screen.getByText("Usuário ou senha incorretos!")).toBeInTheDocument();
});
