import styled from 'styled-components';

export default function DefaultInput({ title, placeHolder, type, value, state }){

    return (
        <InputContainer>
            <span>{title}</span>
            <input placeholder={placeHolder} type={type} value={value} 
            onChange={e => state(e.target.value)} required />
        </InputContainer>
    ); 

}

const InputContainer = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input {
        box-sizing: border-box;
        width: 90%;
        height: 60px;
        padding: 10px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 20px;
    }

    span {
        font-size: 26px;
        color: #0C3904;
        margin-bottom: 15px;
    }

`