import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import tasksJSON from './sample/task.json';
import Tasks from './componentes/Tasks';
import TaskForm from './componentes/TaskForm';
import Posts from './componentes/Posts';




class App extends Component{

  state = {
    task: tasksJSON
  }

  addTask = (title,description)=>{
    console.log(title,description);
    const newTask ={
      title:title,
      description: description,
      id: this.state.task.length
    }
    this.setState({
      task: [...this.state.task,newTask]
    })
  }


  deleteTask = (id)=>{
    const newTasks = this.state.task.filter(task => task.id !== id);
    //console.log(newTasks);
    this.setState({
      task: newTasks
    })
  }
  checkDone= (id)=>{
    const newTasks = this.state.task.map(task=>{
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    });
    this.setState({task: newTasks});
  }
  render(){
    return  <div>
    <Router> 
      <Route path = "/" render={()=>{
        <div> 
           <h1>Tareas</h1>
          <TaskForm addTask = {this.addTask}/>
          <Tasks 
            task = {this.state.task} 
            deleteTask = {this.deleteTask} 
            checkDone = {this.checkDone}
          />
        </div>
      }}>
        </Route>
    </Router>
       
     
       <h1>Lista de tareas</h1>
          <TaskForm addTask = {this.addTask}/>
          <Tasks 
            task = {this.state.task} 
            deleteTask = {this.deleteTask} 
            checkDone = {this.checkDone}  />
      <Posts/>
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