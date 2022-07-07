import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"
import carrinho from "../images/carrinho.png"


export default function Header(){
    return(
        <Container>
            
            <Carrinho>
                <img src={carrinho}></img>  

                <Num_Itens>
                    <span>3</span>
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