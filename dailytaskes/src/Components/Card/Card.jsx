import { Section, ErroSpan } from "./CardStyled";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userCreate } from "../../services/UserServices";
import { useState, useEffect } from "react";

const registerSchema = z.object({
    name: z.string().nonempty({ message: "Nome não pode ser vazio" }).refine(value => !/^\s*$/.test(value), { message: "Nome não pode ter apenas espaços" }),
    username: z.string().nonempty({ message: "Sobrenome não pode ser vazio" }).refine(value => !/^\s*$/.test(value), { message: "Sobrenome não pode ter apenas espaços" }),
    email: z.string().nonempty({ message: "Email não pode ser vazio" }).refine((value) => /@/.test(value), { message: "Email deve conter um @" }),
    password: z.string().nonempty({ message: "Senha não pode ser vazia" }).refine((value) => /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,12}$/.test(value), { message: "* A senha deve conter pelo menos entre 8 a 12 caracters; * A senha deve conter pelo menos um caracter especial: '@,#/?'. " })
})

export function Card() {

    const [userData, setData] = useState({});
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })

    async function onRegister(data) {
        const { name, username, email, password } = data;
        const response = await userCreate({name, username, email, password });
        navigate("/");
        reset();
    }


    return (
        <Section>
            <form onSubmit={handleSubmit(onRegister)}>
                <label>
                    Nome: <br />
                    <input type="text" {...register("name")} placeholder="Insira o nome" />
                    {errors.name && <ErroSpan>*{errors.name.message}</ErroSpan>}
                </label>
                <label >
                    Sobrenome:
                    <br />
                    <input type="text" {...register("username")} placeholder="Insira o sobrenome" />
                    {errors.username && <ErroSpan>*{errors.username.message}</ErroSpan>}
                </label>
                <label >
                    E-mail:
                    <br />
                    <input type="text" {...register("email")} placeholder="Insira o Email" />
                    {errors.email && <ErroSpan>*{errors.email.message}</ErroSpan>}
                </label>
                <label >
                    Senha:
                    <br />
                    <input type="text" {...register("password")} placeholder="Insira uma senha" />
                    {errors.password && <ErroSpan>*{errors.password.message}</ErroSpan>}
                </label>
                <div>
                    <button>Finalizar Cadastro</button>
                </div>
            </form>
        </Section>
    )
}

export function CardLogin() {
    return (
        <Section top>
            <form>
                <label>
                    Email:
                    <br />
                    <input type="text" name="email" placeholder="Insira o email" />
                </label>
                <label>
                    Senha:
                    <br />
                    <input type="text" name="password" placeholder="Insira a senha" />
                </label>
                <div>
                    <button>
                        Login
                    </button>
                </div>
                <section>
                    <div>
                        <a href="#">Ainda não é cadastrado? Clique Aqui</a>
                    </div>
                    <div>
                        <a href="#">Esqueceu a senha? clique aqui</a>
                    </div>
                </section>
            </form>
        </Section>
    )
}