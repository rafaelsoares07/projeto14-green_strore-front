import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function RotaSemProdutos(){

    return (
        <DadosCarrinho>
            <Circle>
                <ion-icon name="cart-outline"></ion-icon>
            </Circle>
            <h1>Seu carrinho está vazio</h1>
            <span>Você ainda não adicionou nenhum produto ao seu carrinho :(</span>
            <Redirect>
                <Link to="/">Voltar às compras <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
            </Redirect>
        </DadosCarrinho>
    );

}

const DadosCarrinho = styled.div `
    width: 60%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 20px;
    }

    span {
        font-size: 20px;
        margin-bottom: 20px;
    }

`

const Circle = styled.div `
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #49781B;
    border-radius: 50%;
    margin: 60px 0px 40px 0px;

    ion-icon {
        font-size: 100px;
        color: #49781B;
    }
`

const Redirect = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-size: 20px;
        color: #49781B;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ion-icon {
        font-size: 30px;
        color: #49781B;
        margin-left: 10px;
    }
`