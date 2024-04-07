import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import {
  decrementCounterCreator,
  incrementCounterCreator,
} from '../../redux/actionsCreators/counterCreators';

export const Counter: FC = () => {
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrementValue = () => {
    dispatch(incrementCounterCreator(100));
  };

  const handleDecrementValue = () => {
    if (!counter) return;
    dispatch(decrementCounterCreator(50));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrementValue}>Increment value</button>
      <button onClick={handleDecrementValue}>Decrement value</button>
    </div>
  );
};
