import { useContext, useState } from 'react';
import styled from 'styled-components';
import TokenContext from '../../context/TokenContext';

export default function Produtos({ arrayCompras, setArrayCompras, setValorProdutos }){

    const [soma, setSoma] = useState(0);

    function pegaTotal() {
        if (arrayCompras.length > 0) {
          return arrayCompras.reduce((previous, current) => {
              return previous + current.value;
          }, 0);
        } else {
          return 0;
        }
    }

    const total = pegaTotal();

    setValorProdutos(total);
        
    return (
        <Container>
            <Top>
                <span>Produto</span>
                <span></span>
                <span>Quantidade</span>
                <span>Preço</span>
            </Top>
            <ListaProdutos>
                {arrayCompras.map((render, index) => <CardProduto  img={render.urlImage} produto={render.titulo} 
                                                                    valor={render.valor} quantidade={render.quantidade} 
                                                                    key={index} />)}
            </ListaProdutos>
        </Container>
    );
}

function CardProduto({ img, produto, quantidade, valor}){

    return (
        <InfosProduto>
            <img src={img} alt={produto} />
            <span>{produto}</span>
            <span>{quantidade}</span>
            <span>R${valor}</span>
        </InfosProduto>
    );

}

const Container = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
`

const Top = styled.div `
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 20px;
    border-bottom: 1px solid lightgray;

    span {
        width: 25%;
        height: fit-content;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
    }
`

const ListaProdutos = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
`

const InfosProduto = styled.div `
    display: flex;
    align-items: center;

    img {
        width: auto;
        height: 100px;
        margin-right: 10px;
    }

    span {
        width: 30%;
        font-size: 16px;
        text-align: center;
    }
`