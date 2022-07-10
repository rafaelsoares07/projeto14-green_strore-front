import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//Importação de telas 
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCarrinho from './components/TelaCarrinho/TelaCarrinho';

//Importacao de estilizacoes
import GlobalStyled from "./styles/GlobalStyled";
import './style.css'

// Context 
import CarrinhoContexto from "./context/CarrinhoContext";
import { useState } from "react";

export default function AppRoutes(){

    let [quantidadeCarrinho, setQuantidadeCarrinho] = React.useState(0);
    let [arrayCompras, setArrayCompras] = useState([]);

    return(

    <CarrinhoContexto.Provider value={{quantidadeCarrinho, setQuantidadeCarrinho, arrayCompras, setArrayCompras}}>

    
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<TelaInicial/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/>
                <Route path="/login" element={<TelaLogin/>}/>
                <Route path="/carrinho" element={<TelaCarrinho />} />
            </Routes>

            <GlobalStyled/>
        </BrowserRouter>

    </CarrinhoContexto.Provider>

    )
}

/*
    <Route path="/login"/>
    <Route path="/carrinho"/>
    <Route path="/finalizar"/>*/
                