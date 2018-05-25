import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import ReviewForm from './ReviewForm.jsx';
import Review from './Review.jsx';

const Root = () => 
  (
    <div>
      <div>
        <h1>HELLO FROM ROOT</h1>
      </div>
      <ReviewForm /> 
      <Review /> 
    </div>
  )

export default Root;


