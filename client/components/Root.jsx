import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Form from './Form.jsx';
import Review from './Review.jsx';

const Root = () => 
  (
    <div>
      <div>
        <h1>HELLO FROM ROOT</h1>
      </div>
      <Form /> 
      <Review /> 
    </div>
  )

export default Root;


