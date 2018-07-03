import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import review from './review';
import instructor from './instructor';
import user from './user';


const reducer = combineReducers({
  review,
  instructor,
  user
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
export * from './review';
export * from './instructor';
export * from './user';