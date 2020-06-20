import React, { Component } from 'react';

class AddTaskform extends Component {

    state = {
        TaskName: '',
      };

      handleChange =(e)=>{
            this.setState(  
            { [e.target.name] :e.target.value}
            )}

            handlesubmit = (e) => {
                e.preventDefault();
                this.props.addtask(this.state.TaskName , [
                   
                  this.state.task1,
                   this.state.task2,
                  this.state.task3,

                ]);
              this.setState({ TaskName: '' });
              };

          render(){

        return (
         <form  onSubmit={this.handlesubmit}>
         <input type="text"
          name='TaskName'
       value={this.state.TaskName}
        placeholder= "Type New TaskHeading here"
        onChange = {this.handleChange} ></input>
          
          <input
            type='text'
            name='task1'
            placeholder='Task1'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='task2'
            placeholder='Task2'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='task3'
            placeholder='Task3'
            value={this.state.value}
            onChange={this.handleChange} />

           <input type="submit"></input>
         </form>
         );}



}



export default AddTaskform;