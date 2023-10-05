import axios from "axios";

const baseUrl = "https://servidor-para-site-de-tarefas.onrender.com";

export async function authentication(data) {
    const { email, password } = data;
    const token = await axios.post(`${baseUrl}/auth`, { email: email, password: password})
    console.log(token.data.token);
    return token;
}