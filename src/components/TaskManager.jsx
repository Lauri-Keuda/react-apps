import { useState } from "react"
import NewTask from "./NewTask"
import Tasks from "./Tasks"

const TaskManager = () => {
  const [ tasks, setTasks ] = useState([
    {
      id: "b",
      name: "Lounas",
      description: "Syö lounas oikeaan aikaan",
      reminder: true
    },
    {
      id: "a",
      name: "Otsikko",
      description: "Lisätietoja tehtävästä",
      reminder: false
    },
    {
      id: "c",
      name: "Käy kaupassa",
      description: "Käy kaupassa tekemässä ostokset",
      reminder: false
    },
    {
      id: "d",
      name: "Do this task",
      description: "This is important task! Dont forget to do this!",
      reminder: true
    },
    {
      id: "e",
      name: "Add more tasks here",
      description: "Add more example tasks here",
      reminder: false
    }
  ])

  //delete task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if(task.id === id){
          return {...task, reminder: !task.reminder}
        } else {
          return task
        }
      })
    )
  }

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <NewTask onAdd={addTask}/>
      <div className="tasks-container">
        {tasks.length > 0 ? (
          <Tasks
          tasks={tasks}
          onDoubleClick={toggleReminder}
          onDelete={deleteTask}
          />
        ) : (
          <div className="no-tasks">
            <h4>No tasks to show</h4>
          </div>
        )}
      </div>
    </>
  )
}

export default TaskManager