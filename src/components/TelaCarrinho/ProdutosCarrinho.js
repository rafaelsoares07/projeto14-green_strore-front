import styled from 'styled-components';
import { useContext } from 'react';
import CarrinhoContexto from '../../context/CarrinhoContext';
import RotaComProdutos from './RotaComProdutos';
import RotaSemProdutos from './RotaSemProdutos';

export default function ProdutosCarrinho(){

    const { quantidadeCarrinho } = useContext(CarrinhoContexto);

    if(quantidadeCarrinho > 0){
        return (
            <Container>
                <RotaComProdutos />
            </Container>
        );
    } else {
        return (
            <Container>
                <RotaSemProdutos />
            </Container>
        );
    }

}

const Container = styled.div `
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

