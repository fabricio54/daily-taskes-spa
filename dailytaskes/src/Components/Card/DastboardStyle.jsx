import styled from "styled-components";

export const DastboardStyle = styled.section`
    display: flex; /* Ativar o modelo de caixa flexível */
    justify-content: center; /* Centralizar horizontalmente */
    align-items: center; /* Centralizar verticalmente */ /* Isso garante que o contêiner ocupe toda a altura da janela de visualização */
    margin-top: 2rem;
    margin-bottom: 2rem;

    h1 {
        margin: auto;
        color: white;
        background-color: #1B1B1B;
        border-radius: .4rem;
        padding: .5rem;
    }

    h1:hover {
        background-color: #303030;
        padding: 2rem;
        transition: .3s;
        cursor: pointer;
    }

    a {
        color: white;
        text-decoration: none;
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Duas colunas, com pelo menos 250px cada, se possível */
    gap: 35px; /* Espaço entre os cards, você pode ajustar conforme necessário */
    max-width: 100%; /* Para evitar que os cards se expandam demais */

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* Uma coluna com um card cada em telas menores que 400px */
    }
`;