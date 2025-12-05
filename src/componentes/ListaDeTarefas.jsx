import { useState } from "react"

function ListaDeTarefas() {

    const [tarefas, setTarefas] = useState([
        { id: 1, titulo: "estudar react", concluida: false },
        { id: 2, titulo: "estudar c#", concluida: false }
    ])

    const [novaTarefa, setNovaTarefa] = useState("")

    function AdicionarTarefa() {
        if(novaTarefa.trim() === "") return

        setTarefas([
            ...tarefas,
            {
                id: Date.now(),
                titulo: novaTarefa,
                concluida: false
            }
        ])
        setNovaTarefa("")
    }

    function RemoverTarefa(id) {
        const novasTarefas = tarefas.filter((t) => t.id !== id)
        setTarefas(novasTarefas)
    }


    return (
        <div className="centralizado">
            <h3 className="playwrite">Lista de tarefas:</h3>

            <input
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Digite sua tarefa"
            />

            <button
                type="button"
                onClick={AdicionarTarefa}
                className="btn btn-success mt-2"
            >
                Adicionar
            </button>
            

            <h2 className="playwrite">Tarefas:</h2>

            {tarefas.map((t) => (
                <div key={t.id} className="d-flex align-items-center gap-3">
                    <p className="m-0">{t.titulo}</p>

                    <button
                        type="button"
                        onClick={() => RemoverTarefa(t.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Remover
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ListaDeTarefas
