import { styled } from "styled-components"
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'

const LeftFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const RightFooter = styled.div`
color: white;
font-size: 12px;
`

const TamanhoIcone = styled(SocialIcon)`
width: 30px !important;;
height: 30px !important;;
`
const Rodape = () => {
    return (
        <>
            <LeftFooter>
                <TamanhoIcone
                    url="www.facebook.com" bgColor="white" fgColor="#04244F"
                />
                <TamanhoIcone url="www.twitter.com" bgColor="white" fgColor="#04244F" />
                <TamanhoIcone url="www.instagran.com" bgColor="white" fgColor="#04244F" />
            </LeftFooter>

            <RightFooter>
                <h1>Desenvolvido por Gabriel Dario</h1>

            </RightFooter>
        </>
    )

}

export default Rodape;