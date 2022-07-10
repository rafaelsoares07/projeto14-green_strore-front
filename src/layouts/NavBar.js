import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <Container>
            <Menu>

            <Link to="/categoria/hortaliças">Hortaliças</Link>
            <Link to="/categoria/proteinas">Proteinas</Link>
            
    
            <Link to="/categoria/proteinas">Pronas</Link>

            <Link to="/categoria/frutas">Frutas</Link>
            <Link to="/categoria/organicos">Orgânicos</Link>
            
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
        
    }

    a{
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
        text-decoration: none;
        color: #FFFFFF;

    }
    
    a:hover{
        transform: scale(1.1);
        color: #B4E49C;
    }
    
`

const Container = styled.div`
    background-color: #49781b;
   
`