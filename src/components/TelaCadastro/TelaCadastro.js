import styled from 'styled-components';
import Header from '../../layouts/Header';
import NavBar from '../../layouts/NavBar';
import DadosCadastro from './DadosCadastro';

export default function TelaCadastro(){

    return(
        <Container>
            <Header />
            <NavBar />
            <DadosCadastro />
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