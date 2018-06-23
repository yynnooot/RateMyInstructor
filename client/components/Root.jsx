import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReviewForm from './ReviewForm.jsx';
import Review from './Review.jsx';
import InstructorForm from './InstructorForm.jsx';
import Instructors from './Instructors.jsx';
import InstructorPage from './InstructorPage.jsx';
import Home from './Home.jsx';
import Nav from './Nav.jsx';

const Root = () => 
  (
      <Router>
        <div className='root-container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/instructors/:id' component={InstructorPage}/>
          </Switch>
        </div>
      </Router> 
  )

export default Root;


