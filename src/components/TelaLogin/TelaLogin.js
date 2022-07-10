import React from "react";
import { useContext } from "react";
import axios from "axios"
import {Link, Navigate, useNavigate} from "react-router-dom"
import styled from "styled-components"


import Header from "../../layouts/Header";
import NavBar from "../../layouts/NavBar"

import TokenContext from "../../context/TokenContext";
import plantar from "../../images/plantar.png"


export default function TelaLogin(){
    
    const navigate = useNavigate()

    const {token, setToken} = useContext(TokenContext)

    console.log(token)

    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")
    console.log(email)
    console.log(senha)

    const user = {
        email:email,
        senha:senha
    }


    function LoginUser(event){
        event.preventDefault();
        
        const promisse = axios.post("http://localhost:5000/login",user)

        promisse.then(LoginUserSucess)
        promisse.catch(LoginUserFail)
       
    }

    function LoginUserSucess(response){
        setToken(response.data.token)
        navigate('/')
    }
    function LoginUserFail(error){
        console.log(error)
    }


    return(
        <>
        <Header/>
        <NavBar/>
        <Container>

                <img src={plantar}/>
                <form onSubmit={LoginUser}>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email"></input>
                    <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)} placeholder="Digite sua senha"></input>
                    <button onClick={LoginUser}>Entrar</button>
                    <Link to="/cadastro"><p>Ainda não tem uma conta? </p></Link>
                </form>
            
        </Container>
        </>
    )
}


const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form{
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input{
            margin: 10px;
            width: 300px;
            height: 50px;
            border-radius: 5px;
            border:1px solid green;
        }

        button{
            border: none;
            border-radius: 5px;
            width: 120px;
            height: 50px;   
            font-size: 20px;
            font-weight: 700;
            color: #14480B;
            border-radius: 5px;
            border: 1px solid #49781B;
            background-color: #A4D77E;
            cursor: pointer;
        }

        a{
            margin: 10px;
            text-decoration: none;
            color: #49781B;
            font-size: 18px;
            cursor: pointer;
        }
        a:hover{
            color: #14480B;
        }

        button:hover{
            background-color: #14480B;
            color: #A4D77E;
        }

        img{ 
            padding-bottom: 40px; 
        }
    }


`