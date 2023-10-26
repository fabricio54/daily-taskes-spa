import { Form, Section, DivButton } from './CardStyled';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaske } from '../../Models/CreateTaske';
import { ErroSpan } from './CardStyled';
import { createTaskeService } from '../../services/TaskeServices';
import { useNavigate } from 'react-router';


export function Taske() {

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(createTaske)
    });

    async function onRegisterTaske(data) {
        const response = await createTaskeService(data);
        if(response.status === 200) {
            navigate('/dastboard')
        } else {
            console.log("Error interno no Servidor");
        }
        reset();
    }

    return (
        <>
            <Section>
                <Form onSubmit={handleSubmit(onRegisterTaske)}>
                    <label>Título: <br />
                        <input type="text" {...register("name")} placeholder="Titulo da Tarefa" />
                        {errors.name && <ErroSpan>*{errors.name.message}</ErroSpan>}
                    </label>
                    <label htmlFor="">Descrição: <br />
                        <input type="text" {...register("description")} placeholder="Descrição da Tarefa" /></label>
                        {errors.description && <ErroSpan>*{errors.description.message}</ErroSpan>}
                    <DivButton>
                        <button>Criar Tarefa</button>
                    </DivButton>
                </Form>
            </Section>
        </>
    )
}