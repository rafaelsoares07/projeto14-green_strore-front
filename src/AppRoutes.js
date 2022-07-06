import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";


import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaLogin from "./components/TelaLogin/TelaLogin";

export default function AppRoutes(){

    return(

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<TelaInicial/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/>
                <Route path="/login" element={<TelaLogin/>}/>
                

            </Routes>
        </BrowserRouter>

    )
}

/*
    <Route path="/login"/>
    <Route path="/carrinho"/>
    <Route path="/finalizar"/>*/
                