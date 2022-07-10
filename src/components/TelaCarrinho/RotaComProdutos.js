import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Produtos from './Produtos';

export default function RotaComProdutos(){

    const arrayProdutos = [
        {
        "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/7f6595b2-f358-430a-85db-712bdda1bbcd.jpg",
        "titulo": "Peixe Inte Xerelete 1kg",
        "valor": 15.99,
        "categoria":"proteinas"
        }, 
        {
        "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/41a5eefa-5390-4ea6-b71d-db355b79b90a.jpg",
        "titulo": "File Peixe Panga 1kg",
        "valor": 26.99,
        "categoria":"proteinas"
        },
        {
        "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/dd1a38e6-5f01-4f51-a9ab-66d3e2d3b034.jpg",
        "titulo": "Bife Milanesa Cha de Dentro",
        "valor": 59.99,
        "categoria":"proteinas"
        },
        {
        "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/92b5e22b-7715-4f91-a5bf-d1fd941354c7.jpg",
        "titulo": "Bacalhau Saithe 1kg",
        "valor": 85.79,
        "categoria":"proteinas"
        },
        {
        "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/c6649678-dfff-4778-95a5-d3ee448f4d07.jpg",
        "titulo": "Acem sem osso 1kg",
        "valor": 25.99,
        "categoria":"proteinas"
        },
        {
            "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/7f6595b2-f358-430a-85db-712bdda1bbcd.jpg",
            "titulo": "Peixe Inte Xerelete 1kg",
            "valor": 15.99,
            "categoria":"proteinas"
            }, 
            {
            "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/41a5eefa-5390-4ea6-b71d-db355b79b90a.jpg",
            "titulo": "File Peixe Panga 1kg",
            "valor": 26.99,
            "categoria":"proteinas"
            },
            {
            "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/dd1a38e6-5f01-4f51-a9ab-66d3e2d3b034.jpg",
            "titulo": "Bife Milanesa Cha de Dentro",
            "valor": 59.99,
            "categoria":"proteinas"
            },
            {
            "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/92b5e22b-7715-4f91-a5bf-d1fd941354c7.jpg",
            "titulo": "Bacalhau Saithe 1kg",
            "valor": 85.79,
            "categoria":"proteinas"
            },
            {
            "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/c6649678-dfff-4778-95a5-d3ee448f4d07.jpg",
            "titulo": "Acem sem osso 1kg",
            "valor": 25.99,
            "categoria":"proteinas"
            },
            {
                "url":"https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/92b5e22b-7715-4f91-a5bf-d1fd941354c7.jpg",
                "titulo": "Bacalhau Saithe 1kg",
                "valor": 85.79,
                "categoria":"proteinas"
                },
    ];

    let numeroProdutos = arrayProdutos.length;
    let valorProdutos = 'R$ 50,00';

    return (
        <Container>
            <Produtos arrayProdutos={arrayProdutos} />
            <Finalizar>
                <div>
                    <span>Produtos:</span>
                    <span>{numeroProdutos}</span>
                </div>
                <h1>
                    <span>Subtotal:</span>
                    <span>{valorProdutos}</span>
                </h1>
                <button>FINALIZAR COMPRA</button>
                <Redirect>
                    <Link to="/">Continuar comprando<ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                </Redirect>
            </Finalizar>
        </Container>
    );

}

const Container = styled.div `
    width: 60%;
    min-height: 100vh;
    display: flex;
    margin: 50px 0px 100px 0px;
`

const Finalizar = styled.div `
    width: 40%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    padding: 20px;
    margin: 60px 0px 0px 40px;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    h1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    button {
        width: 80%;
        height: 50px;
        margin-bottom: 20px;
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