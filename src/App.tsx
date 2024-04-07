import { FC } from 'react';
import { Users } from './components/Users/Users';
import { Posts } from './components/Posts/Posts';

export const App: FC = () => {
  return (
    <div>
      <Posts />
      <Users />
    </div>
  );
};
