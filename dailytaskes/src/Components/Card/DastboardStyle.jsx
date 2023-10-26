import styled from "styled-components";

export const DastboardStyle = styled.section`
    display: flex; /* Ativar o modelo de caixa flexível */
    justify-content: center; /* Centralizar horizontalmente */
    align-items: center; /* Centralizar verticalmente */ /* Isso garante que o contêiner ocupe toda a altura da janela de visualização */
    margin-top: 2rem;
    margin-bottom: 2rem;

    h1 {
        margin: auto;
        background-color: white;
        border-radius: .4rem;
        padding: .5rem;
    }
`;