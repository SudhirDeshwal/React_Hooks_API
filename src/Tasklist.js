import React from 'react';


const Tasklist = (props) => {

    return (
         <div> 
        <h4>
        <button onClick={() => props.removeTask(props.id)}>X</button>
      {props.title}</h4>
         <ul> 
          {props.item.map((t) => (
              <li>{t}</li> ) 
          ) }
                
          </ul>
        </div>
         
         );
      }
      

      export default Tasklist;
