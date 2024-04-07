import { call, takeEvery } from 'redux-saga/effects';
import { getUsersFromServer } from '../api/getUsers';
import { UsersActions } from '../types/users-types';

function* usersWorker(): Generator<any, void, any> {
  const data = yield call(getUsersFromServer);
  console.log(data);
}

function* usersWatcher() {
  yield takeEvery(UsersActions.GET, usersWorker);
}

export function* usersRootSaga() {
  yield usersWatcher();
}
