import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { findAllTaskeService } from "../../services/TaskeServices";
import { CardTaske } from "../../Components/Card/CardTaske";
import { Link } from "react-router-dom";
import { DastboardStyle } from "../../Components/Card/DastboardStyle";

export function Dastboard() {

    const [taske, setTaske] = useState([]);
    console.log(taske);

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
    }, []);


    return (
        <>

            <DastboardStyle>
                <h1>Criar Nova Tarefa <Link to="/createtaske">+</Link></h1> 
                </DastboardStyle>
                <div>
                    {Array.isArray(taske) && taske.length > 0 ? (
                        taske.map(item => (
                            <CardTaske
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                date={item.createAt}
                                status={item.status}
                            />
                        ))
                    ) : (
                        <p>Não tem tarefas no momento</p>
                    )}
                </div>
            


        </>
    )
}