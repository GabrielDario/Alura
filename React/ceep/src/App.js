import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormCadastro from "./components/FormCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  criarNota(titulo,texto) {
    console.log(`Um nova nota:\n${titulo}\n${texto}\n` )

  }
  render() {
    return (
      <section className="conteudo">
        <FormCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;