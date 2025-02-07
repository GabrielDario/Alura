import { styled } from "styled-components"
import search from '/search.png'

const ContainerEstilizado = styled.div`
      position: relative;
      display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
     width: 37.625rem;
    height: 3.5rem;
    background-color: transparent;
    border: 2px solid #C98CF1;
    border-radius: 0.625rem;
    padding-left: 1rem;
    box-sizing: border-box;
    font-size: 1rem;
    color: white;
    font-size: 1.25rem;

    &::placeholder{
        color: white;
        font-size: 1.25rem;
    }
`

const IconeLupa = styled.img`
 position: absolute;
 right: 0.85rem;
`;

const CampoTexto = ({searchField,changeSearch}) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" value={searchField} onChange={(e) => changeSearch(e.target.value)} />
            <IconeLupa src={search} alt="Ícone de Lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto