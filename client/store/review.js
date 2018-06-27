import axios from 'axios'

const initialState = { allReviews: []}
//action types
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';

//action creators
const getAllReviews = (reviews) => ({
  type: GET_ALL_REVIEWS,
  reviews
})
const addReview = (review) => ({
  type: ADD_REVIEW,
  review
})

//thunk creators
export const getAllReviewsThunk = () => 
 dispatch => 
  axios.get('/api/review')
    .then(reviews => 
      dispatch(getAllReviews(reviews.data)))
    .catch(err => console.log(err))

// export const addReviewThunk = (reviewObj) => 
//   dispatch => 
//     axios.post('/api/review', reviewObj)
//       .then(review => {
//         dispatch(addReview(review.data))})
//       .catch(err => console.log(err))


export default function (state = initialState, action){
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return { allReviews: action.reviews}
    case ADD_REVIEW:
      return { allReviews: [...state.allReviews, action.review] }
    default:
      return state
  }
} 