import styled from "styled-components"

import Header from "../../layouts/Header"
import NavBar from "../../layouts/NavBar"

export default function TelaInicial(){

    return(
        <Container>
            <Header/>
            <NavBar/>

            <AreaProdutos>
                <L_Card>
                    <Titulo>Abacate Avocado 1kg</Titulo>

                     <img src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/144x144/53e0319b-d6c6-40ee-9331-c9e4c3de32c5.jpg"/>
                    
                    <Footer>
                        <p>14,56R$</p>  
                        <button>Comprar</button>
                    </Footer>
                        
                </L_Card>

                <L_Card>
                    <Titulo>Peixe de Rio 500gr</Titulo>
                    
                    <img src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/7f6595b2-f358-430a-85db-712bdda1bbcd.jpg"/>

                    <Footer>
                        <p>24,99R$</p>  
                        <button>Comprar</button>
                    </Footer>

                </L_Card>

                <L_Card>
                <Titulo>Folha verde 100gr</Titulo>
                    
                    <img src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/144x144/53e0319b-d6c6-40ee-9331-c9e4c3de32c5.jpg"/>

                    <Footer>
                        <p>12,99R$</p>  
                        <button>Comprar</button>
                    </Footer>

                </L_Card>


                <L_Card>
                    <Titulo>Abacate Avocado 1kg</Titulo>

                     <img src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/144x144/7a30b36d-a89b-41f6-87b9-e50df857b59d.jpg"/>
                    
                    <Footer>
                        <p>14,56R$</p>  
                        <button>Comprar</button>
                    </Footer>
                        
                </L_Card>

                <L_Card>
                    <Titulo>Abacate Avocado 1kg</Titulo>

                     <img src="https://s3.amazonaws.com/produtos.vipcommerce.com.br/144x144/1663c16a-13f4-4d3a-adde-6288cb5bd306.jpg"/>
                    
                    <Footer>
                        <p>14,56R$</p>  
                        <button>Comprar</button>
                    </Footer>
                        
                </L_Card>
                
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
    grid-template-columns: repeat(auto-fit,minmax(225px, 2fr));



        
`

const L_Card = styled.div`
        box-shadow: 1px 4px 12px 2px rgba(0,0,0,0.4);
        border-radius: 5px;
        width: 220px;
        height: 330px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
        }

       
`

const Titulo = styled.p`
            height: 35px;
            display: flex;
            align-items: center;
            font-family: 'Courier New', Courier, monospace;
            
`

const Footer = styled.div`
    width: 100%;
    text-align: center;
    p{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding: 5px;
        font-size: 18px;
        background-color: #49781B;
        margin-bottom: 3.5px;
        color: #fff;
    }
    button{
        border-radius: 5px;
        color: white;
        width: 125px;
        border: none;
        padding: 10px;
        background-color: green;
        font-weight: 600;
        cursor: pointer;
    }

    button:hover{
        background-color: #7CC447;
    }
`


