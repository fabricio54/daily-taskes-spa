import axios from "axios";

const baseUrl = "https://servidor-para-site-de-tarefas.onrender.com"

export async function userCreate(dados) {

    try {
        const response = await axios.post(`${baseUrl}/user`, dados)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }

}

export function confirmEmail(dados) {
    /*axios.post(`${baseUrl}/user/email`, dados)
    .then((resp) => {
        console.log(resp)
        return resp;
    }).catch((erro) => {
        console.log(erro);
    });
    */
    const resp = axios.post(`${baseUrl}/user/email`, dados);

    return resp;
}