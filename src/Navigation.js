import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ()=> {

    return (
         <div> 
          <nav>

         <ul>
             <li>
                 <NavLink to='/' exact>Home</NavLink>
             </li>
             <li>
                 <NavLink  to='/mainpost'>Task List with Context api</NavLink>
             </li>
            
             <li>
                 <NavLink to='/todo'>Todo with Context api</NavLink>
             </li>
             <li>
                 <NavLink to='/maintasklist'>Tasklist(dont click:old states)</NavLink>
             </li>

             </ul>              
          </nav>
         </div>
         
         );
      };

    export default Navigation;