import React from 'react';
import HeaderContext from './HeaderContext';

const Header = ()=> {

    return (
         <div> 
               
            <HeaderContext.Consumer>
                {
                 (context) => (
                 <h4> {context.title} <br></br> <br></br>Total Number of Tasks :{context.items}</h4> 
                 
                 )

                }

            </HeaderContext.Consumer>



          {/* <h4>{props.title} </h4>
          <h4>Total Number of Tasks : {props.items}</h4> */}
         </div>
         
         );
      };

    export default Header;