import styled from 'styled-components';
import Footer from '../../layouts/Footer';
import Header from "../../layouts/Header";
import NavBar from "../../layouts/NavBar";
import ProdutosCarrinho from './ProdutosCarrinho';

export default function TelaCarrinho(){

    return (
        <Container>
            <Header />
            <NavBar />
            <ProdutosCarrinho />
            <Footer />
        </Container>
    )
}

const Container = styled.div `
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`