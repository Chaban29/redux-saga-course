import { IUser } from '../../interfaces/users';
import { UsersActions } from '../../types/users-types';

export const getUsersCreator = (payload: IUser[]) => ({
  type: UsersActions.GET,
  payload,
});
