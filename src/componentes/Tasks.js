import React, {Component} from 'react';
import Task from './Task'
import PropTypes from 'prop-types';

class Tasks extends Component{
    
    render(){
        return this.props.task.map((task)=> <Task task={task} key = {task.id}/>)
    }
}
Tasks.propTypes = {
    task: PropTypes.array.isRequired
}

export default Tasks;