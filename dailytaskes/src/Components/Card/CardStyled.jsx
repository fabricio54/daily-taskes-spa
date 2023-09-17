import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        background-color: #fff;
        width: 70vw;
        margin-top: 5rem;
        padding: 2rem;
        border-radius: .3rem;

        label {
            font-size: 1.5rem;

            input {
            width: 100%;
            height: 2rem;
            margin: .5rem 0;
            font-size: 1rem;
            padding: 0 0 0 .5rem;
            border-color: #6156A6;
            border-radius: .2rem;

            &:focus {
                background-color: #75727211;
                color: black;
            }
            }
        }

       div {
            display: flex;
            justify-content: center;

            button {
                margin: .8rem 0 0 0;
                padding: .4rem;
                font-size: 1rem;
                background-color: #34d3d3bc;
                border-radius: 1rem;
                cursor: pointer;

                &:hover {
                    background-color: #34bfbf;
                    transition: .3s;
                    padding: .6rem;
                }
            }
       }
        
       section {
            display: flex;
            flex-direction: column;
            margin-top: .5rem;
            gap: .5rem;

            div {
                
                a {
                    color: black;
                }

                a:hover {
                    font-size: 1.1rem;
                    color: #757272;
                    transition: .4s;
                }
                
            }
       }
    }

`;

export const ErroSpan = styled.span`
    background-color: white;
    color: #ef3a3a;
    padding: .5rem;
    width: 99%;
    display: flex;
    justify-content: left;
    font-size: .7rem;
    font-weight: bold;
`;