import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width : 212px;
`

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icons/home-active.png"
            iconeInativo="/icons/home-inactive.png"
            ativo={true}
          >
            Início
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="/icons/views-active.png"
            iconeInativo="/icons/views-inactive.png"
          >
            Mais visitados
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="/icons/like-active.png"
            iconeInativo="/icons/like-inactive.png"
          >
            Mais Curtidas
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="/icons/news-active.png"
            iconeInativo="/icons/news-inactive.png"
          >
            Novas
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="/icons/surprise-me-active.png"
            iconeInativo="/icons/surprise-me-inactive.png"
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
}

export default BarraLateral;