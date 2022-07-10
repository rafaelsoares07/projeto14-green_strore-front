import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";

//Importação de telas 
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCarrinho from './components/TelaCarrinho/TelaCarrinho';
import TelaCategoria from "./components/TelaCategoria/TelaCategoria";
import TelaCheckout from "./components/TelaCheckout/TelaCheckout";

//Importacao de estilizacoes
import GlobalStyled from "./styles/GlobalStyled";
import './style.css'

// Context 
import CarrinhoContexto from "./context/CarrinhoContext";
import TokenContext from "./context/TokenContext";

export default function AppRoutes(){

    const [token, setToken] = React.useState('')
    const [quantidadeCarrinho, setQuantidadeCarrinho] = React.useState(0)
    let [arrayCompras, setArrayCompras] = useState([]);    

    return(

<TokenContext.Provider value={{token, setToken}}>

    <CarrinhoContexto.Provider value={{quantidadeCarrinho, setQuantidadeCarrinho, arrayCompras, setArrayCompras}}>
    
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<TelaInicial/>}/>
                <Route path="categoria/:name" element={<TelaCategoria/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/>
                <Route path="/login" element={<TelaLogin/>}/>
                <Route path="/carrinho" element={<TelaCarrinho />} />
                <Route path="/checkout" element={<TelaCheckout/>}/>
            </Routes>

            <GlobalStyled/>
        </BrowserRouter>

    </CarrinhoContexto.Provider>

</TokenContext.Provider>

    )
}

/*
    
    <Route path="/finalizar"/>*/
                