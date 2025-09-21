// src/App.js
import React, { Component } from "react";
import "./App.css";
import { credenciaisValidas, mensagemDeLogin } from "./loginToolkit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", senha: "", mensagem: "" };
    this.mudarEmail = this.mudarEmail.bind(this);
    this.mudarSenha = this.mudarSenha.bind(this);
    this.acessar = this.acessar.bind(this);
  }

  mudarEmail(e) { this.setState({ email: e.target.value }); }
  mudarSenha(e) { this.setState({ senha: e.target.value }); }

  acessar(e) {
    e.preventDefault();
    const { email, senha } = this.state;
    const ok = credenciaisValidas(email, senha);
    this.setState({ mensagem: mensagemDeLogin(ok) });
  }

  render() {
    const { email, senha, mensagem } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.acessar}>
          <input type="email" placeholder="e-mail" value={email} onChange={this.mudarEmail} />
          <input type="password" placeholder="senha" value={senha} onChange={this.mudarSenha} />
          <button type="submit">Acessar</button>
        </form>
        <label className="mensagem">{mensagem}</label>
      </div>
    );
  }
}

export default App;
