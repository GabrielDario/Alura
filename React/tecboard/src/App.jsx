import './App.css'

// no react, componentes são FUNÇÕES
//props é um objeto. props.filhos
function TituloFormulario({props}) {
  return (
    <h2>{children} </h2>

  )
}

function CampoDeFormulario({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function FormularioDeEvento() {

  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario>
      <CampoDeFormulario>
        <label htmlFor="nome">
          Qual o nome do evento?
        </label>
        <CampoDeEntrada type="text"
         id='nome' 
         placeholder='Summer dev hits'
         name='nomeEvento' />
      </CampoDeFormulario>
    </form>
  )
}

function Label() {
  return (
    <label>

    </label>
  )
}

function CampoDeEntrada(props) {
  return <input {...props}/>
}
function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
