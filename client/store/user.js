import axios from 'axios';

const defaultUser = {};

//action type
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

//action creator
const getUser = user => ({
  type: GET_USER,
  user
})

const removeUser = () => ({
  type: REMOVE_USER
})

//thunk creators

export const auth = () => 
  dispatch =>
    axios.get('api/auth/linkedin')
      .then(res => {
        console.log('THIS IS RES:',res)
        dispatch(getUser(res.data))}
      )
      .catch(err => console.log(err))

export const me = () => 
  dispatch =>
    axios.get('/api/auth/me')
      .then(res => 
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const logout = () => 
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        dispatch(removeUser())
      })
      .catch(err => console.log(err))


export default function (state = defaultUser, action){
  switch(action.type){
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}