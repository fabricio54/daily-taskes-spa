import { CardTaskeStyle } from "./CardTaskeStyle";
import { Section, DivButton } from "./CardStyled";
import { Link } from "react-router-dom";
import { deleteTaskeService, modificarStatus } from "../../services/TaskeServices";
import { useState } from "react";
import { StyleButton } from "../button/ButtonStyled";

export function CardTaske(props) {
    const LinkStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    const [deleted, setDeleted] = useState(false);
    const [status, setStatus] = useState(props.status);

    const handleUpdateStatus = async () => {
        try {
            const response = await modificarStatus(props.id);
            if (response.status === 200) {
                setStatus(!status);
            }
        } catch (error) {
            console.error("Erro ao modificar o status da tarefa", error);
        }
    }

    async function deleteTaske() {
        try {
            const response = await deleteTaskeService(props.id);
            if (response.status === 200) {
                setDeleted(true);
            }
        } catch (error) {
            console.error("Erro ao excluir a tarefa", error);
        }
    }

    if (deleted) {
        return null;
    }

    return (
        <>
            <Section>
                <CardTaskeStyle>
                    Título<div> {props.name}</div>
                    Descrição<div className="descript">{props.description}</div>
                    Status<div > {status ? 'Concluida' : 'Pendente'}</div>
                    Data Criação<div> {props.date}</div>
                    <div className="button">
                        <StyleButton color="red"><button onClick={deleteTaske}>Apagar Tarefa</button></StyleButton>

                        <StyleButton ><button className="link">
                            <Link to={`/editartask/${props.id}`} style={LinkStyle}>
                                Editar Tarefa
                            </Link>
                        </button></StyleButton>

                        <StyleButton><button onClick={handleUpdateStatus}>Alterar Status</button></StyleButton>
                    </div>
                </CardTaskeStyle>
            </Section>
        </>
    )
}
