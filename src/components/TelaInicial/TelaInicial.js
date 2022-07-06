import styled from "styled-components"

import Header from "../../layouts/Header"
import NavBar from "../../layouts/NavBar"

export default function TelaInicial(){

    return(
        <Container>
            <Header/>
            <NavBar/>

            <AreaProdutos>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </AreaProdutos>
            
        
        </Container>
        
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;

`

const AreaProdutos = styled.div`
    height: 100%;
    background-color: beige;
    padding: 30px;
    justify-content: center;
    justify-items: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));

    div{
        
        width: 225px;
        height: 300px;
        background-color: #8caa6e;
    }
`