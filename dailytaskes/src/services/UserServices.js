import axios from "axios";

const baseUrl = "https://servidor-para-site-de-tarefas.onrender.com";

export function userCreate(dados) {

    console.log(dados)
    const response = axios.post(`${baseUrl}/user`, dados)
    .then((resposta) => console.log(resposta.data))
    .catch((erro) => {
        if(erro.response.status == 500) {
            return 500;
        }
    });
}