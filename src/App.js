import React, { Component} from 'react';
import Header from './Header';
import Tasklist from './Tasklist';
import AddTaskform from './AddTaskform';
import Taskfilter from './Taskfilter';
import Home from './Home';
import Post from './Post';
import Todo from './Todo';
import Navigation from './Navigation';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import PageNotFound from './PageNotFound';
import MainTasklist from './MainTasklist';
import Mainpost from './Mainpost';


function App() {
  //  main function
    return(
    <BrowserRouter>
      <div>
        <Navigation />
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mainpost' component={Mainpost} />
          <Route path='/todo' component={Todo} />
          <Route path='/maintasklist' component={MainTasklist} />
          <Route component={PageNotFound} />
          </Switch>
      </div>
    </BrowserRouter>

   
      

    );
  
}


export default App;
