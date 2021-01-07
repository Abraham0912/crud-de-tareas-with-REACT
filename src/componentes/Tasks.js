import React, {Component} from 'react';
import Task from './Task'

class Tasks extends Component{
    
    render(){
        return this.props.task.map((task)=> <Task task={task} key = {task.id}/>)
    }
}

export default Tasks;