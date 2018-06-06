import axios from 'axios'

const initialState = {
  instructors: []
}

//action types
const ADD_INSTRUCTOR = 'ADD_INSTRUCTOR';

//action creators
const addInstructor = (instructor) => ({
  type: ADD_INSTRUCTOR,
  instructor
})

//thunk creator
export const addInstructorThunk = (instructorObj) => 
  dispatch => 
    axios.post('/api/instructor', instructorObj)
      .then(instructor => {
        dispatch(addInstructor(instructor.data))})
      .catch(err => console.log(err))


export default function (state = initialState, action){
  switch (action.type) {
    case ADD_INSTRUCTOR:
      return { instructors: [...state.instructors, action.instructor] }
    default:
      return state
  }
} 