import React, { Component} from 'react';
import Header from './Header';
import Tasklist from './Tasklist';
import AddTaskform from './AddTaskform';
import Taskfilter from './Taskfilter';
import TasklistContext from './TasklistContext';
import HeaderContext from './HeaderContext';

class Mainpost extends Component {
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
      <div className='App'>
      {/* <button onClick={this.switchNamehandler}>Click here to Add New Task</button>  */}
     {/* <Header title="Task List" items={this.state.tasklist.length}/> */}
       
     <Taskfilter tasklist = {this.state.tasklist}  handlefilter={this.handleFilterTask} />
    <HeaderContext.Provider value={{items:this.state.tasklist.length , title:"Task List"}}>
       <Header></Header>
     </HeaderContext.Provider>

     {/* {this.state.tasklist.map((t1) => (
    <Tasklist 
     title={t1.title} 
     item={t1.tasks}
     id={t1.id} 
     removeTask={this.handleRemoveTask}/> 
     ))}  */}

{filteredlist.map((t1) => (
     <TasklistContext.Provider value= {{
       title:t1.title,
       item:t1.tasks,
       id:t1.id,
       removeTask:this.handleRemoveTask

}}>
       <Tasklist></Tasklist>
     </TasklistContext.Provider> 
     ))} 

     <AddTaskform addtask={this.addNewTask}></AddTaskform>

     </div>
    );
  }
}

    export default Mainpost;