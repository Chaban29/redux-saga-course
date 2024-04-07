import { CounterActions } from '../../types/counter-types';

export const incrementCounterCreator = (payload: number) => ({
  type: CounterActions.INCREMENT,
  payload,
});

export const decrementCounterCreator = (payload: number) => ({
  type: CounterActions.DECREMENT,
  payload,
});
