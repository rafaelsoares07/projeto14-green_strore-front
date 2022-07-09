import axios from 'axios';
import styled from 'styled-components';
import Header from '../../layouts/Header';
import NavBar from '../../layouts/NavBar';
import DadosPessoais from './DadosPessoais';
import DadosEndereço from './DadosEndereço';

export default function TelaCadastro(){

    return(
        <Container>
            <Header />
            <NavBar />
            <Dados>
                <DadosPessoais />
                <DadosEndereço />
            </Dados>
        </Container>
    );
}

const Container = styled.div `
    width: 100vw;
    height: 100vh;
`

const Dados = styled.div `
    display: flex;
    width: 100vw;
    height: 100vh;
`