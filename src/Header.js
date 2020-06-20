import React from 'react';

const Header = (props)=> {

    return (
         <div> 
          <h4>{props.title} </h4>
          <h4>Total Number of Tasks : {props.items}</h4>
         </div>
         
         );
      };

    export default Header;