import React, {Component} from 'react';
import './App.css';

import tasksJSON from './sample/task.json';
import Tasks from './componentes/Tasks';


class App extends Component{

  state = {
    task: tasksJSON
  }

  render(){
    return <div>
      <h1>Lista de tareas</h1>
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