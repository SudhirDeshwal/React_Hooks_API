import React from 'react';
import TasklistContext from './TasklistContext';


const Tasklist = () => {

    return (
         <div> 

        <TasklistContext.Consumer>
             {
               (context) => (
                <div>
                <h4> 
                  <button onClick={() => context.removeTask(context.id)}>X</button> {context.title}

                </h4>
                <ul> 
          {context.item.map((t) => (
              <li>{t}</li> ) 
          ) }
                
          </ul>
                </div>
               )
             }

        </TasklistContext.Consumer>





        {/* <h4>
        <button onClick={() => props.removeTask(props.id)}>X</button>
      {props.title}</h4>
         <ul> 
          {props.item.map((t) => (
              <li>{t}</li> ) 
          ) }
                
          </ul> */}
        </div>
         
         );
      }
      

      export default Tasklist;
