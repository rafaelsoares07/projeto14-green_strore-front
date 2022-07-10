import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Produtos from './Produtos';
import CarrinhoContexto from '../../context/CarrinhoContext';
import TokenContext from '../../context/TokenContext';

export default function RotaComProdutos(){

    const { quantidadeCarrinho, arrayCompras, setArrayCompras } = useContext(CarrinhoContexto);
    const { token } = useContext(TokenContext);
    const [valorProdutos, setValorProdutos] = useState(0);

    const navigate = useNavigate();

    function finalizarCompra(){
        if(!token){
            alert('Faça o login ou cadastre-se para finalizar sua compra');
            navigate('/login');
        } else {
            navigate('/finalizar');
        }
    }

    return (
        <Container>
            <Produtos arrayCompras={arrayCompras} setArrayCompras={setArrayCompras} 
                      setValorProdutos={setValorProdutos} />
            <Finalizar>
                <div>
                    <span>Produtos:</span>
                    <span>{quantidadeCarrinho}</span>
                </div>
                <h1>
                    <span>Subtotal:</span>
                    <span>{valorProdutos}</span>
                </h1>
                <button onClick={finalizarCompra}>FINALIZAR COMPRA</button>
                <Redirect>
                    <Link to="/">Continuar comprando<ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                </Redirect>
            </Finalizar>
        </Container>
    );

}

const Container = styled.div `
    width: 60%;
    min-height: 100vh;
    display: flex;
    margin: 50px 0px 100px 0px;
`

const Finalizar = styled.div `
    width: 40%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    background-color: rgba(180, 228, 156, 0.3);
    padding: 20px;
    margin: 60px 0px 0px 40px;

    div {
        width: 90%;
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        margin-bottom: 20px;
    }

    h1 {
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }

    button {
        width: 80%;
        height: 50px;
        font-size: 20px;
        font-weight: 700;
        color: white;
        background-color: #49781B;
        border: none;
        border-radius: 10px;
        margin-bottom: 50px;
    }

`

const Redirect = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 100%;
        font-size: 20px;
        color: #49781B;
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