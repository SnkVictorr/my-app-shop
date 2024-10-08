"use client" // Coloco somente em páginas para usuários

import AddTask from "@/components/AddTask";
import Task from "@/components/Task";
import { useState } from "react";

// Components deve iniciar com letra maiuscula
function Home() {

  // tasks armazena o estado atual do useState e  setTasks é uma função que atualiza o valor
  const [tarefas, setTasks] = useState([
    // tasks
    {
      id:1,
      title: "Estudar Programação",
      description: "Estudar Programação para se tornar um milhonário",
      isCompleted: false,
    },
    {
      id:2,
      title: "Estudar Inglês",
      description: "Estudar Inglês para se tornar um milhonário",
      isCompleted: false,
    },
    {
      id:3,
      title: "Estudar Matemática",
      description: "Estudar Matemática para se tornar um milhonário",
      isCompleted: false,
    }
  ])

  function clicarTarefa(taskId) {
    const newTasks = tarefas.map((task)=>{
      // If resumido (a função terminará se a função retornar)
      if(task.id=== taskId) {
        //IF Preciso ATUALIZAR ESSA TAREFA 
        return {...task, isCompleted: !task.isCompleted}};
        //Não precisa atualizar essa tarefa
        return task; // Else
    })
    setTasks(newTasks);
  }

  function deletarTarefaPorClick(taskId) {
    const newTasks = tarefas.filter(task => task.id !== taskId);
    //function task() {task.id}
    setTasks(newTasks);
  }

  function adicionarTarefa(titulo, descricao) {
    const newTask = {
      id: tarefas.length + 1, //
      title: titulo,
      description: descricao,
      isCompleted: false,
    }

  }

  return (
    // div vazia
    <>
    {/* w-... e h-... mudam a largura e altura respectivamente. p define o padding */}
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
          {/* Usando o component e definindo o valor da propriedade*/}
        {/* <Task props={"Olá mundo"}/> */}
        
        {/* Propriedades usadas com props.xxx(ex: props.tasks) em outros components */}
        {/* Componenets0 */}
        <Task tasks={tarefas} onTaskClick={clicarTarefa} onDeleteTaskClick={deletarTarefaPorClick}/>
        <AddTask/>
      </div>

      </div>
    </>
  )
    
}

export default Home;