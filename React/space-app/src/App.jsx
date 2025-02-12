import { styled } from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from "./Componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./Componentes/Galeria"
import Rodape from "./Componentes/Rodape"
import fotos from './fotos.json'

import { useState } from "react"
import ModalZoom from "./Componentes/ModalZoom"
const FundoGradiente = styled.div`
 background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
 width: 100%;
 min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

const ConteudoGaleria = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
`
const ConteudoRodape = styled.div`
      margin-top: 4.5rem;
    background-color: rgb(4, 36, 79);
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 3rem;
`
const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />

        <MainContainer>
          <BarraLateral />

          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      <ConteudoRodape>
        <Rodape />
      </ConteudoRodape>
    </FundoGradiente>
  )
}

export default App
