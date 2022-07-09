import styled from 'styled-components';

export default function Footer(){

    return (
        <DivFooter>
            <span>Green Store | Sua feira livre online - Todos os direitos reservados</span>
            <span>Av. Full Stack, 2022, Driven - Rio de Janeiro, RJ</span>
        </DivFooter>
    );
}

const DivFooter = styled.div `
    width: 100vw;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #49781B;
    font-size: 16px;
    color: white;
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;

    span {
        margin-left: 100px;
    }
`