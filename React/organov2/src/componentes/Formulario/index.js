import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { Alert } from 'react-bootstrap';

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('')
    }
    const [sucessoColaborador, setSucessoColaborador] = useState(false);
    const [sucessoTime, setSucessoTime] = useState(false);

    const colaboradorSucesso = () => {
        console.log('aquii')
        setSucessoColaborador(true); 

   
        setTimeout(() => {
            setSucessoColaborador(false);
        }, 3000); 
    };

    const timeSucesso = () => {
        console.log('aquii')
        setSucessoTime(true); 
        setTimeout(() => {
            setSucessoTime(false);
        }, 3000); 
    };
    return (

        <section className="formulario-container">

            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <Campo
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <Campo
                    label='Imagem'
                    valor={imagem}
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Times'
                    items={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao texto='Criar card' onClick={colaboradorSucesso} />
                {sucessoColaborador && (
                    <Alert variant="success">
                        Colaborador Criado!
                    </Alert>
                )}
            </form>


            <form className="formulario"
                onSubmit={(e) => {
                    e.preventDefault();
                    cadastrarTime({ nome: nomeTime, cor: corTime })
                    setNomeTime('');
                    setCorTime('#fff');
                }}>
                <h2>Preencha os dados para criar o um novo time</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite seu o nome do time '
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)} />
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor'
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)} />
                <Botao texto='Criar card' onClick={timeSucesso} />

                {sucessoTime && (  
                <Alert variant="success">
                    Time Criado!
                </Alert>
                )}
            </form>
        </section>
    )
}

export default Formulario