import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//Importação de telas 
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCategoria from "./components/TelaCategoria/TelaCategoria";

//Importacao de estilizacoes
import GlobalStyled from "./styles/GlobalStyled";
import './style.css'

// Context 
import CarrinhoContexto from "./context/CarrinhoContext";
import TokenContext from "./context/TokenContext";

export default function AppRoutes(){

    const [token, setToken] = React.useState('')
    const [quantidadeCarrinho, setQuantidadeCarrinho] = React.useState(0)

    

    return(

<TokenContext.Provider value={{token, setToken}}>

    <CarrinhoContexto.Provider value={{quantidadeCarrinho, setQuantidadeCarrinho}}>

    
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<TelaInicial/>}/>
                <Route path="categoria/:name" element={<TelaCategoria/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/>
                <Route path="/login" element={<TelaLogin/>}/>
                
            </Routes>

            <GlobalStyled/>
        </BrowserRouter>

    </CarrinhoContexto.Provider>

</TokenContext.Provider>

    )
}

/*
    <Route path="/login"/>
    <Route path="/carrinho"/>
    <Route path="/finalizar"/>*/
                