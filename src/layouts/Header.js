import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"
import carrinho from "../images/carrinho.png"

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CarrinhoContexto from "../context/CarrinhoContext";



export default function Header(){

    const navigate = useNavigate()

    let {quantidadeCarrinho} = useContext(CarrinhoContexto)

    return(
        <Container>

            <BotaoLogin onClick={()=> navigate('/login')}>
                <span>Fazer Login</span>
            </BotaoLogin>
            
            <Carrinho onClick={()=> navigate('/carrinho')}>
                <img src={carrinho}></img>  

                <Num_Itens>
                    <span>{quantidadeCarrinho}</span>
                </Num_Itens>

            </Carrinho>
            

            <Logo>
                <img src={logo}/>
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
    cursor: pointer;

`

const Num_Itens = styled.div`
    width: 25px;
    height: 25px;
    background-color: #49781b;
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


const BotaoLogin = styled.div`
    border-radius: 5px;
    width: 120px;
    height: 35px;
    background-color: red;
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #49781b;
    cursor: pointer;

    span{
        font-weight: 600;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: yellow;
    }
`