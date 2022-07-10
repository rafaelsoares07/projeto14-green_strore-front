import styled from 'styled-components';
import RotaComProdutos from './RotaComProdutos';
import RotaSemProdutos from './RotaSemProdutos';

export default function ProdutosCarrinho(){

    /* const definirRota = prompt('rota?');

    if(definirRota === 'sem'){
        return (
            <Container>
                <RotaSemProdutos />
            </Container>
        );
    } */

    /* else { */
        return (
            <Container>
                <RotaComProdutos />
            </Container>
        );
    /* } */

}

const Container = styled.div `
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

