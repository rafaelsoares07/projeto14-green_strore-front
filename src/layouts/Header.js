import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"
import carrinho from "../images/carrinho.png"

import { useContext } from "react";
import CarrinhoContexto from "../context/CarrinhoContext";
import { Link, useNavigate } from "react-router-dom";



export default function Header(){

    let {quantidadeCarrinho} = useContext(CarrinhoContexto);
    let navigate = useNavigate()

    return(
        <Container>
            <CadastroLogin>
                <ion-icon name="person"></ion-icon>
                <span>Olá! Clique aqui para <Link to='/cadastro'>se cadastrar</Link> ou, 
                      se já possui uma conta, <Link to='/login'>faça login</Link></span>
            </CadastroLogin>
            <Carrinho>
                
                <img src={carrinho} onClick={() => navigate('/carrinho')}></img>  

                <Num_Itens>
                    <span>{quantidadeCarrinho}</span>
                </Num_Itens>

            </Carrinho>
            

            <Logo>
                <img src={logo} onClick={() => navigate('/')} />
            </Logo>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-image: url(${header});
    display: flex;
    justify-content: center;
    background-color: #B4E49C;

    position: relative;

`

const Logo = styled.div`

    cursor: pointer;
    
    img{
        margin-top: 25px;
        width: 125px;
        background-color: white;
        border-radius: 50%;
    }
`

const Carrinho = styled.div`
    padding: 8px;
    border-radius: 50%;
    background-color: #FFFFFF;

    position: absolute;
    top:15px;
    right: 20px;

    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    } 

`

const Num_Itens = styled.div`
    width: 25px;
    height: 25px;
    background-color: #7CC447;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    font-weight: 600;

    position: absolute;
    top: -11px;
    right: -2px;

`

const CadastroLogin = styled.div `
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 10px;
    color: white;
    position: absolute;
    background-color: rgb(73, 120, 27, 0.8);
    top: 10px;
    right: 100px;
    padding: 5px;

    ion-icon {
        font-size: 100px;
        color: #0C3904;
        margin-right: 10px;
    }

    a {
        color: white;
    }
`