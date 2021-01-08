import React, {Component} from 'react';
import './App.css';

import tasksJSON from './sample/task.json';
import Tasks from './componentes/Tasks';
import TaskForm from './componentes/TaskForm';


class App extends Component{

  state = {
    task: tasksJSON
  }

  addTask = (title,description)=>{
    console.log(title,description);
    const newTask ={
      title:title,
      description: description,
      id: 45
    }
    this.setState({
      task: [...this.state.task,newTask]
    })
  }
  render(){
    return <div>
      <h1>Lista de tareas</h1>
      <TaskForm addTask = {this.addTask}/>
      <Tasks task = {this.state.task}></Tasks>
    </div>
      
  }
  funcionPrueba(){
    console.log("hola soy funcionPruebade App.js e imprimo state:");
    console.log(this.state);
    //alert("hola");
  }
}

const nuevoObjeto = new App();
nuevoObjeto.funcionPrueba();

export default App;



/* function App() {
  console.log(tasks);
  state={
    task: tasks
  }
  return (
    <div>
     <h1>hola</h1>
     <h2>{state.task.map(e=>e.title)}</h2>
    </div>
  );
} */