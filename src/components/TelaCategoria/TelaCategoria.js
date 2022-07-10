import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"

import axios from "axios"

import Header from "../../layouts/Header"
import NavBar from "../../layouts/NavBar"

import CardProduto from "../TelaInicial/CardProduto"

export default function TelaCategoria(){

    const params = useParams();
    const nameCategoria = params.name

    const [arrayProdutos, setArrayProdutos ] =  React.useState([])

    const produtosDaCategoria = arrayProdutos.filter(el=> el.categoria===nameCategoria)
   

    function PegarDadosFail(error){
        alert(error)
    }

    function PegarDadosSucess(response){
        setArrayProdutos(response.data)
    }

    React.useEffect(()=>{
        const promisse = axios.get("http://localhost:5000/")

        promisse.then(PegarDadosSucess)
        promisse.catch(PegarDadosFail)

    },[])


    function renderizaProdutos(){
        if(arrayProdutos!=[]){
            return(
                <>
                    {produtosDaCategoria.map((el, i)=> <CardProduto idProduto={el._id} key={i} urlImage={el.url} titulo={el.titulo} valor={el.valor} /> )}
                </>
            )
        }
        else{
            return(
                <h1>Sem produtos no momento</h1>
            )
        }
    }



    return(
        <Container>
            <Header/>
            <NavBar/>

            <AreaProdutos>

                {renderizaProdutos()}
                
                
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
    min-height: 85vh;
    background-color:#a68c69;
    padding: 30px;
    justify-content: center;
    justify-items: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit,minmax(225px, 2fr));



        
`





