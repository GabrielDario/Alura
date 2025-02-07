import { styled } from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`
const Galeria = ({foto = {}}) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo>
                <Imagem foto={foto}/>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria