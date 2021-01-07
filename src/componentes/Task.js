import React,{Component} from 'react';
import './Tasks.css';


class Task extends Component{
    render(){
        return <p className="red">
        {this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id}
        <input type="checkbox"></input>
        <button>x</button>
    </p>
    }
}

export default Task;