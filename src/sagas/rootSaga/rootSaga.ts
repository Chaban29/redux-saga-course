import { all } from 'redux-saga/effects';
import { counterSaga } from '../counterSaga';
import { usersRootSaga } from '../usersSaga';
import { postsRootSaga } from '../postsSaga';

export function* rootSaga() {
  yield all([counterSaga(), usersRootSaga(), postsRootSaga()]);
}
