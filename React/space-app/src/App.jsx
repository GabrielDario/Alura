import { styled } from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import CampoTexto from "./Componentes/CampoTexto"

const FundoGradiente = styled.div`
 background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
 width: 100%;
 min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <CampoTexto />
    </FundoGradiente>
  )
}

export default App
