import './colaborador.css'
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar ,aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsFavirito ={
        size: 25,
        onClick : favoritar
    }
    return (
        <div className="colaborador">
            <MdDelete
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)} />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favotirar'>
                    {colaborador.favorito 
                    ?   <FaStar {...propsFavirito} color='#ff0000' /> 
                    : <CiStar {...propsFavirito} />}
                </div>
            </div>
        </div>)
}

export default Colaborador