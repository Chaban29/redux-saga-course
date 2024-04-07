import { IUser } from '../../interfaces/users';
import { TypeUsersActions, UsersActions } from '../../types/users-types';

const usersState: IUser[] = [];

export const usersReducer = (
  state = usersState,
  { type, payload }: TypeUsersActions
) => {
  switch (type) {
    case UsersActions.GET:
      return [...state, ...payload];
    default:
      return state;
  }
};
