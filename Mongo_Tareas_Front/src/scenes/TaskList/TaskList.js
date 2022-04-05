import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { createTask, fetchTasks, deleteTask } from '../../api';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Task from '../../components/Task';
import './TaskList.css';

function TaskList(props) {
    const {token, name} = props // recibir el token como props

    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState([])
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
      if (!token) {
        navigate("/auth")
      }
    }, [token])
    
  
    useEffect(() => {
      setLoader(true);
      fetchTasks(token)
        .then((res) => {
          setTasks(res.data)
          setLoader(false);
        })
        .catch((err) => {
          console.error(err)
        })
    }, [])
  
    const addTask = () => {
      createTask(taskText, token) // TODO Mandar token
      .then((res)=>{
          const createdTask = res.data
          setTasks(tasks.concat(createdTask))
          setTaskText('')
      })
      .catch((err)=>{
        console.error(err)
      })
      
    }
  
    const delTask = (id) => {
      deleteTask(id, token)
      .then((res)=>{
          const deletedTasks = res.data
          setTasks(tasks.filter((t)=> t._id !== id))
      })
      .catch((err)=>{
        console.error(err)
      })
    }

 return (
    <div className='task-list'>
        <h2>Bienvenido, {name}</h2>
        <div className='task-input__container'>
        <TextInput
        value={taskText} 
        placeholder='Ingresa la tarea'
        onChange={(e)=> setTaskText(e.target.value)}
         />
       <Button 
       className='task-input__btn'
       onClick={addTask}
       >Ingresar Tarea</Button>
      </div>

        {loader && (<p style={{ color: 'white' }}>Loading...</p>)}

        {tasks.map((task)=> 
        <Task key={task._id} text = {task.text} onDelete={()=> delTask(task._id)}/>
        ).reverse()}
    </div>
    )
}

export default TaskList;