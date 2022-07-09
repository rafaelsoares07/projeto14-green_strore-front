import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"


export default function Header(){
    return(
        <Container>
            <Menu>
            <span>Verduras</span>
            <span>Legumes</span>
            <span></span>
            <span>Frutas</span>
            <span>Orgânicos</span>
            </Menu>
            
        </Container>
    )
}

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 600px;
    height: 45px;


    span{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
        font-weight: 600;
    }
    
    
`

const Container = styled.div`
    background-color: #49781b;
   
`