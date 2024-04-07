import { select, takeLatest, takeLeading } from 'redux-saga/effects';
import { CounterActions } from '../types/counter-types';

const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms * 1000));

function* incrementWorker(): Generator<any, void, any> {
  const count = yield select(({ counter }) => counter.count);
  yield delay(2);
  yield console.log(`request ${count}`);
}

function* sagaClickWatcher() {
  yield takeLatest(CounterActions.INCREMENT, incrementWorker);
  yield takeLeading(CounterActions.INCREMENT, incrementWorker);
}

export function* counterSaga() {
  yield sagaClickWatcher();
}
