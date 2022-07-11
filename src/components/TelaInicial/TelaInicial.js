import React from "react"
import styled from "styled-components"

import axios from "axios"

import Header from "../../layouts/Header"
import NavBar from "../../layouts/NavBar"

import CardProduto from "./CardProduto"

export default function TelaInicial(){

    const [arrayProdutos, setArrayProdutos ] =  React.useState([])
    

    function PegarDadosFail(error){
        alert(error)
    }

    function PegarDadosSucess(response){
        setArrayProdutos(response.data)
    }

    React.useEffect(()=>{
        const promisse = axios.get("https://green-ecomecer.herokuapp.com/")

        promisse.then(PegarDadosSucess)
        promisse.catch(PegarDadosFail)

    },[])


    function renderizaProdutos(){
        if(arrayProdutos!=[]){
            return(
                <>
                    {arrayProdutos.map((el, i)=> <CardProduto idProduto={el._id} key={i} urlImage={el.url} titulo={el.titulo} valor={el.valor} /> )}
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
    padding: 30px;
    justify-content: center;
    justify-items: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit,minmax(225px, 2fr));      
`






