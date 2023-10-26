import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:3000";

export async function createTaskeService(dados) {
    console.log(dados, Cookies.get('token'))
    const response = await axios.post(`${baseUrl}/taske/create`, dados, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
    console.log(response)
    return response;
}

export async function findAllTaskeService() {
    const response = await axios.get(`${baseUrl}/taske`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response.data.taske;
}

export async function updateTaskeService(dados, id) {
    const response = await axios.patch(`${baseUrl}/taske/update?id=${id}`, dados, {
        headers:
        {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response;
}

export async function deleteTaskeService(id) {
    const response = await axios.delete(`${baseUrl}/taske/delete?id=${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response;
}

export async function modificarStatus(id) {
    const response = await axios.put(`${baseUrl}/taske/statustaske?id=${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response;
}