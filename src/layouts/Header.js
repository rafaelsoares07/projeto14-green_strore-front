import styled from "styled-components";
import logo from "../images/logob.svg"
import header from "../images/header.png"


export default function Header(){
    return(
        <Container>

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
    
`

const Logo = styled.div`
    
    img{
        margin-top: 25px;
        width: 125px;
        background-color: white;
        border-radius: 50%;
    }
`