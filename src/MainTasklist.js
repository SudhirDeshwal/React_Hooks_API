import React, { Component} from 'react';
import Header from './Header';
import Tasklist from './Tasklist';
import AddTaskform from './AddTaskform';
import Taskfilter from './Taskfilter';

class MainTasklist extends Component {
  state = {

    tasklist: [ { title: 'Humber',tasks: ['Task #1' ,'Task #2', 'Task #3'],id: 1,},
      {title: 'MERN',tasks: ['Lab' ,'Project', 'Quiz'],id: 2, },
      {title: 'Java',tasks: ['GD' ,'Exam', 'Assignment'],id: 3,}, ],
    filterlist : '', 
  };
  previd = 4;

 

 
 addNewTask = (title, tasks) => {

  this.setState((prevState) => {

    return {
      tasklist : [ ...prevState.tasklist , {
        title: title,
        tasks: tasks ,
        id: (this.previd += 1),}
      ]
    }
  })}

  handleRemoveTask = (id) => {
    this.setState((prevState) => {
      return {
        tasklist: prevState.tasklist.filter((t) => t.id !== id),
      };
    });
  };


  handleFilterTask = (title) => {
    this.setState((prevState) => {
      return {
        filterlist: title,
      };
    });
  };

  
   



render(){


  let filteredlist = this.state.filterlist === '' ? this.state.tasklist :
  this.state.tasklist.filter((t) => t.title === this.state.filterlist);

    return(
      <div className='MainTasklist'>



    <Taskfilter tasklist = {this.state.tasklist}  handlefilter={this.handleFilterTask} />
       {/* <button onClick={this.switchNamehandler}>Click here to Add New Task</button>  */}
      <Header title="Task List" items={this.state.tasklist.length}/>

      {filteredlist.map((t1) => (
     <Tasklist 
      title={t1.title} 
      item={t1.tasks}
      id={t1.id} 
      removeTask={this.handleRemoveTask}/> 
      ))}

      <AddTaskform addtask={this.addNewTask}></AddTaskform>
      
      

      </div>
    );
  }
}


export default MainTasklist;
