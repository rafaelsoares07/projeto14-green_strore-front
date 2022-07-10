import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '../../layouts/default-input';
import Footer from '../../layouts/Footer';

export default function DadosCadastro(){

    const navigate = useNavigate();
    const API = 'http://localhost:5000/cadastro';

    //variaveis dados pessoais
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirma, setSenhaConfirma] = useState('');

    //variaveis dados de endereço
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    function postCadastro(event){

        event.preventDefault();

        if(senha === senhaConfirma){
            const novoUsuario = {
                nome,
                email,
                senha,
                senhaConfirma,
                cep,
                rua,
                bairro,
                numero,
                cidade,
                estado
            }

            const promise = axios.post(API, novoUsuario)
            
            promise.then(() => {
                    navigate('/login');
            });
            
            promise.catch(() =>{
                alert('Não foi possível finalizar o cadastro')
            });
        }
    }

    return (

    <form onSubmit={postCadastro}>
        <Dados>
            <DadosPessoais>
                <DadosPessoaisHeader>Dados pessoais</DadosPessoaisHeader>
                <DefaultInput title='Nome:' placeHolder='Digite seu nome...' type='text' value={nome} 
                state={setNome} />
                <DefaultInput title='E-mail:' placeHolder='Digite seu e-mail...' type='email' value={email} 
                state={setEmail} />
                <div>
                    <DefaultInput title='Senha:' placeHolder='Digite uma senha...' type='password' value={senha} 
                    state={setSenha} />
                    <DefaultInput title='Confirmar senha:' placeHolder='Confirme a senha...' type='password' 
                    value={senhaConfirma} state={setSenhaConfirma} />
                </div>
            </DadosPessoais>
            <DadosEndereço>
                <DadosEndereçoHeader>Endereço</DadosEndereçoHeader>
                <div>
                    <DefaultInput title='CEP:' placeHolder='CEP' type='text' value={cep} state={setCep} />
                    <DefaultInput title='Rua:' placeHolder='Nome da rua' type='text' value={rua} 
                    state={setRua} />
                </div>
                <div>
                    <DefaultInput title='Bairro:' placeHolder='Nome do bairro' type='text' 
                    value={bairro} state={setBairro} />
                    <DefaultInput title='Número:' placeHolder='Número' type='text' value={numero} 
                    state={setNumero} />
                </div>
                <div>
                    <DefaultInput title='Cidade:' placeHolder='Cidade' type='text' value={cidade} 
                    state={setCidade} />
                    <DefaultInput title='Estado:' placeHolder='Estado' type='text' value={estado} 
                    state={setEstado} />
                </div>
            </DadosEndereço>
        </Dados>
        <ButtonDiv>
            <button onClick={() => navigate('/')}>
                <ion-icon name="caret-back-outline"></ion-icon>
                VOLTAR
            </button>
            <button type='submit'>
                CADASTRAR
                <ion-icon name="caret-forward-outline"></ion-icon>
            </button>
        </ButtonDiv>
        <Footer />
    </form>

    );
}

const DadosPessoais = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-right: 1px solid #B4E49C;

    div {
        width: 100%;
        display: flex;
    }
`

const DadosPessoaisHeader = styled.div ` 
    width: 90%;
    font-size: 30px;
    color: #0C3904;
    border-bottom: 1px solid #B4E49C;
    margin: 30px 0px 30px 0px;
`

const DadosEndereço = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 40px;

    div {
        width: 100%;
        display: flex;
    }
`

const DadosEndereçoHeader = styled.div ` 
    width: 90%;
    font-size: 30px;
    color: #0C3904;
    border-bottom: 1px solid #B4E49C;
    margin: 30px 0px 30px 0px;
`

const ButtonDiv = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 40px 0px 100px 0px;

    button {
        width: 20%;
        height: 50px;   
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 700;
        color: white;
        border-radius: 20px;
        border: 1px solid #49781B;
        background-color: #A4D77E;
        cursor: pointer;
    }

    ion-icon {
        font-size: 30px;
    }

`

const Dados = styled.div `
    display: flex;
    width: 100vw;
`