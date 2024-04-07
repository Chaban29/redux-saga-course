import { IUser } from '../interfaces/users';

export const enum UsersActions {
  GET = 'users/getUsersFromServer',
}

export type TypeUsersActions = { type: UsersActions.GET; payload: IUser[] };
