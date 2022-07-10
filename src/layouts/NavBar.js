import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"


export default function Header(){
    return(
        <Container>
            <Menu>
                <span>Verduras</span>
                <span>Legumes</span>
                <span>Hortaliças</span>
                <span></span>
                <span>Frutas</span>
                <span>Orgânicos</span>
                <span>Carnes e peixes</span>
            </Menu>
            
        </Container>
    )
}

const Menu = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 45px;

    span{
        color: white;
        font-size: 20px;
    }
    
    
`

const Container = styled.div`
    background-color: #49781b;
   
`