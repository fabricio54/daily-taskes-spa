import { CardTaskeStyle } from "./CardTaskeStyle";
import { Section, DivButton } from "./CardStyled";
import { Link } from "react-router-dom";
import { deleteTaskeService, modificarStatus } from "../../services/TaskeServices";
import { useEffect, useState } from "react";


export function CardTaske(props) {
    const [deleted, setDeleted] = useState(false);
    const [status, setStatus] = useState(false);


    async function atualizarStatus() {
        try {
            // Faça uma chamada à API (por meio de uma rota) para atualizar o status no banco de dados.
            // Passe o `props.id` para identificar qual tarefa você deseja atualizar.
            const response = await modificarStatus(props.id);
            
            // Verifique se a atualização do status foi bem-sucedida na resposta (você pode definir seu próprio critério).
            if (response.status === 200) {
                // Atualize o estado para refletir a alteração de status.
                setStatus(!status);
            }
        } catch (error) {
            console.error("Erro ao modificar o status da tarefa", error);
        }
    }
    

    async function deleteTaske() {
        try {
            const response = await deleteTaskeService(props.id);
            // Verifique se a exclusão foi bem-sucedida na resposta (você pode definir seu próprio critério)
            if (response.status === 200) {
                setDeleted(true); // Atualize o estado para refletir a exclusão
            }
        } catch (error) {
            console.error("Erro ao excluir a tarefa", error);
        }
    }

    if (deleted) {
        // Se a tarefa foi excluída, não renderize o componente
        return null;
    }

    return (
        <>
            <Section>
                <CardTaskeStyle>
                    <div><span>Título</span>: {props.name}</div>
                    <div><span>Descrição</span>: {props.description}</div>
                    <div><span>Status</span>: {props.status ? 'Concluida' : 'Pendente'}</div>
                    <div><span>Data</span>: {props.date}</div>
                    <span>
                            <button onClick={deleteTaske}>Apagar Tarefa</button>
                                <Link to={`/editartask/${props.id}`}>
                                    <button>Editar Tarefa</button>
                                </Link> 
                        <button onClick={atualizarStatus}>Alterar Status</button>
                    </span>
                </CardTaskeStyle>
            </Section>
        </>
    )
}
