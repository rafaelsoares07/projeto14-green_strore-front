import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//Importação de telas 
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaLogin from "./components/TelaLogin/TelaLogin";

//Importacao de estilizacoes
import GlobalStyled from "./styles/GlobalStyled";
import './style.css'

export default function AppRoutes(){

    return(

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<TelaInicial/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/>
                <Route path="/login" element={<TelaLogin/>}/>
                
            </Routes>

            <GlobalStyled/>
        </BrowserRouter>

    )
}

/*
    <Route path="/login"/>
    <Route path="/carrinho"/>
    <Route path="/finalizar"/>*/
                