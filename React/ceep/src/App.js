import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormCadastro from "./components/FormCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;