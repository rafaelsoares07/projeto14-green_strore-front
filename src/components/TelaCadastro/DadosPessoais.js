import styled from 'styled-components';

export default function DadosPessoais(){
    return (
        <InputContainer>
            <HeaderDados>
                Dados pessoais
            </HeaderDados>
            <input></input>
        </InputContainer>
    );
}

const InputContainer = styled.div `
    box-sizing: border-box;
    width: 50%;
    padding: 20px;
    border-right: 1px solid #7CC644;

    input {
        width: 60%;
        height: 50px;
    }
`
const HeaderDados = styled.div `
    color: #7F7F7F;
    font-size: 30px;
    border-bottom: 1px solid #7CC644;
    margin-bottom: 30px;
`