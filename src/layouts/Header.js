import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"
import carrinho from "../images/carrinho.png"

/* import { useNavigate } from "react-router-dom"; */
import { useContext } from "react";
import CarrinhoContexto from "../context/CarrinhoContext";
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../context/TokenContext";

export default function Header(){

    const {userLogado} = useContext(TokenContext)
    let {quantidadeCarrinho} = useContext(CarrinhoContexto);
    let navigate = useNavigate();

    function UsuarioLogado(){
        if(userLogado!=''){
            return(
                <Logado>
                    <ion-icon name="person"></ion-icon>
                    <span>Olá! {userLogado.nome}</span>
                </Logado>
            )
        }
        else{
            return(
                <CadastroLogin>
                    <ion-icon name="person"></ion-icon>
                    <span>Olá! Clique aqui para <Link to='/cadastro'>se cadastrar</Link> ou, 
                    se já possui uma conta, <Link to='/login'>faça login</Link></span>
                </CadastroLogin>
            )
        }
    }

    return(
        <Container>
            {UsuarioLogado()}
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
    cursor: pointer;

    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    } 

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

const Logado = styled.div `
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
        font-size: 50px;
        color: #0C3904;
        margin-right: 10px;
    }

    a {
        font-weight: 700;
        font-size: 18px;
        color: white;
    }
`

