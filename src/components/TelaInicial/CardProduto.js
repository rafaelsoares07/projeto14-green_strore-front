import styled from "styled-components"
import axios from 'axios';

import { useContext } from "react";
import CarrinhoContexto from "../../context/CarrinhoContext";
import TokenContext from "../../context/TokenContext";

export default function CardProduto({urlImage, valor, titulo, idProduto}){

    /* const id = idProduto
    const API = 'http://localhost:5000/carrinho'; */

    const {setQuantidadeCarrinho, quantidadeCarrinho, arrayCompras, setArrayCompras} = useContext(CarrinhoContexto);
    /* const { token } = useContext(TokenContext); */

    function adicionarCarrinho(){
        
        let qtd = quantidadeCarrinho + 1;
        setQuantidadeCarrinho(qtd);

        const dadosCompra = {
            idProduto,
            urlImage,
            titulo,
            valor,
            quantidade: 1
        };

        const novoArray = [...arrayCompras, dadosCompra];
        setArrayCompras(novoArray);

       /*  const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        } */


        /*console.log(dadosCompra)
        
        const promise = axios.post(API, dadosCompra, config);

        promise.catch(() => {
            alert('Tente novamente');
        }); */
    }

    return(
        <L_Card>
                    <Titulo>{titulo}</Titulo>

                     <img src={urlImage}/>
                    
                    <Footer>
                        <p>{valor}R$</p>  
                        <button onClick={()=>adicionarCarrinho()}>Comprar</button>
                    </Footer>
                        
        </L_Card>
    )
}


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