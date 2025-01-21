import './botao.css'

const Botao = ({texto,onClick}) => {
    return <button className="botao" onClick={onClick}>
        {texto}
    </button>
}

export default Botao