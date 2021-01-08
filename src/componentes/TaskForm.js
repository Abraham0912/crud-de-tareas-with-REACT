import React, {Component} from 'react';


export default class TaskForm extends Component{
    state = {
        title: "",
        descripcion: ""
    }
    onSubmit = e =>{
        console.log("ESTOY ENVIANDO...");
        this.props.addTask(this.state.title,this.state.descripcion);
        e.preventDefault();
    }
    onChange = e =>{
        //console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        
        return(
            <form onSubmit={this.onSubmit}>
                <input name= "title"type= "text" placeholder = "Write a task" value = {this.state.title} onChange={this.onChange}/>
                <br/>
                <br/>
                <textarea name= "descripcion"placeholder="Write a description to task" value = {this.state.descripcion} onChange={this.onChange}></textarea>
                <br/>
                <input type = "submit" value = "Enviar"/>
            </form>
        )
    }
}

