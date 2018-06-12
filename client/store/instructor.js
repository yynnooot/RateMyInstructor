import axios from 'axios'

const initialState = {
  currentInstructor: {},
  instructors: []
}

//action types
const ADD_INSTRUCTOR = 'ADD_INSTRUCTOR';
const GET_INSTRUCTOR = 'GET_INSTRUCTOR';
const GET_ALL_INSTRUCTORS = 'GET_ALL_INSTRUCTORS';

//action creators
const addInstructor = (instructor) => ({
  type: ADD_INSTRUCTOR,
  instructor
})

const getInstructor = (instructor) => ({
  type: GET_INSTRUCTOR,
  instructor
})

const getAllInstructors = (instructors) => ({
  type: GET_ALL_INSTRUCTORS,
  instructors
})

//thunk creator
export const getInstructorThunk = (instructorId) =>
  dispatch => 
    axios.get(`/api/instructor/${instructorId}`)
      .then(instructor => {
        dispatch(getInstructor(instructor))
      })

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
    case GET_INSTRUCTOR:
      return { ...state, current: action.instructor}
    case ADD_INSTRUCTOR:
      return { instructors: [...state.instructors, action.instructor] }
    case GET_ALL_INSTRUCTORS:
      return { instructors: action.instructors }
    default:
      return state
  }
} 