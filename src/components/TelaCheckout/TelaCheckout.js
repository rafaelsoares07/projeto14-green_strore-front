import styled from 'styled-components';
import Header from "../../layouts/Header";
import NavBar from "../../layouts/NavBar";
import { Link } from 'react-router-dom';


export default function TelaCheckout(){

    return (
        <>
        <Header />
        <NavBar />
        <Container>
            
            
            <Circle>
                <ion-icon name="happy-outline"></ion-icon>
            </Circle>
            <h1>Compra feita com sucesso!</h1>
            <span>Agora você pode relaxar e esperar suas compras chegarem! </span>
            
           
        </Container>
        </>
    )
}

const Container = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   
`

const Circle = styled.div `
    
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #49781B;
    border-radius: 50%;
    margin: 200px 0px 40px 0px;

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