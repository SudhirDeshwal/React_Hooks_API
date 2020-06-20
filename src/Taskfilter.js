import React, { Component } from 'react';

class Taskfilter extends Component {

    state = {

        selectTitle :'',

    }


    handleChange=(e)=> {
      
        this.setState(
            {selectTitle: e.target.value}, () => {
                this.props.handlefilter(this.state.selectTitle);
            } );
        };

    render() {
     
        return (
     <div>
       <select name='selectTitle' value={this.state.selectTitle} onChange={this.handleChange}>
        <option value="">All</option>
           {

           this.props.tasklist.map((t2) => (
           <option value={t2.title}> {t2.title}</option>
           ))


           }
       </select>

     </div>

        )

    }
}

export default Taskfilter;