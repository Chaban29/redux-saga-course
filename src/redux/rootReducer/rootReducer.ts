import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { usersReducer } from '../reducers/usersReducer';
import { postsReducer } from '../reducers/postsReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
