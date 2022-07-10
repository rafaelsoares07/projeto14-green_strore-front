import styled from 'styled-components';
import { useContext } from 'react';
import CarrinhoContexto from '../../context/CarrinhoContext';
import RotaComProdutos from './RotaComProdutos';
import RotaSemProdutos from './RotaSemProdutos';

export default function ProdutosCarrinho(){

    const {arrayCompras} = useContext(CarrinhoContexto);

    const itensCarrinho = arrayCompras.length;

    if(itensCarrinho > 0){
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

