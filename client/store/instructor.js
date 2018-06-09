import axios from 'axios'

const initialState = {
  instructors: []
}

//action types
const ADD_INSTRUCTOR = 'ADD_INSTRUCTOR';
const GET_ALL_INSTRUCTORS = 'GET_ALL_INSTRUCTORS';

//action creators
const addInstructor = (instructor) => ({
  type: ADD_INSTRUCTOR,
  instructor
})

const getAllInstructors = (instructors) => ({
  type: GET_ALL_INSTRUCTORS,
  instructors
})

//thunk creator
export const addInstructorThunk = (instructorObj) => 
  dispatch => 
    axios.post('/api/instructor', instructorObj)
      .then(instructor => {
        dispatch(addInstructor(instructor.data))
      })
      .catch(err => console.log(err))

export const getAllInstructorsThunk = () => 
  dispatch => 
    axios.get('/api/instructor')
      .then(instructors => {
        dispatch(getAllInstructors(instructors.data))
      })
      .catch(err => console.log(err))

export default function (state = initialState, action){
  switch (action.type) {
    case ADD_INSTRUCTOR:q
      return { instructors: [...state.instructors, action.instructor] }
    case GET_ALL_INSTRUCTORS:
      return { instructors: action.instructors }
    default:
      return state
  }
} 