import React from "react";
import { useContext } from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"

import TokenContext from "../../context/TokenContext";


export default function TelaLogin(){

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
    }
    function LoginUserFail(error){
        console.log(error)
    }


    return(
        <Container>

                <form onSubmit={LoginUser}>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email"></input>
                    <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)} placeholder="Digite sua senha"></input>
                    <button onClick={LoginUser}>Entrar</button>
                    <Link to="/cadastro"><p>Ainda não tem uma conta? </p></Link>
                </form>
            
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;

`