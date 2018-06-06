import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import ReviewForm from './ReviewForm.jsx';
import Review from './Review.jsx';
import InstructorForm from './InstructorForm.jsx';

const Root = () => 
  (
    <div>
      <ReviewForm /> 
      <Review /> 
      <InstructorForm />
    </div>
  )

export default Root;


