import React, { useEffect, useState } from "react";
import { findAllTaskeService } from "../../services/TaskeServices";
import { CardTaske } from "../../Components/Card/CardTaske";
import { Link } from "react-router-dom";
import { DastboardStyle, Cards } from "../../Components/Card/DastboardStyle";

export function Dastboard() {
    const [taske, setTaske] = useState([]);
    const [forceReload, setForceReload] = useState(false);

    async function findAllTaskes() {
        try {
            const taskeResponse = await findAllTaskeService();
            setTaske(taskeResponse);
        } catch (error) {
            console.error("Erro ao buscar as tarefas: ", error);
        }
    }

    useEffect(() => {
        findAllTaskes();
    }, [forceReload]); // Adicione `forceReload` como dependência do useEffect

    // Função para forçar a recarga da página
    function forcePageReload() {
        setForceReload(true);
    }

    return (
        <>
            <DastboardStyle>
                <h1>Criar Nova Tarefa <Link to="/createtaske">+</Link></h1>
            </DastboardStyle>
            <Cards>
                {Array.isArray(taske) && taske.length > 0 ? (
                    taske.map(item => (
                        <CardTaske
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            date={item.createAt}
                            status={item.status}
                            // Passe a função `forcePageReload` como prop
                            forcePageReload={forcePageReload}
                        />
                    ))
                ) : (
                    <p>Não tem tarefas no momento</p>
                )}
            </Cards>
        </>
    )
}
