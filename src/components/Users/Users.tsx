import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { IUser } from '../../interfaces/users';
import { getUsersCreator } from '../../redux/actionsCreators/usersCreators';
import { getUsersFromServer } from '../../api/getUsers';

let nextKeyId: number = 0;

export const Users: FC = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleGetUsersFromServer = async () => {
    try {
      const users = await getUsersFromServer();
      return dispatch(getUsersCreator(users));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {users.length === 0 ? (
          <div>Users is empty</div>
        ) : (
          users.map((user: IUser) => <li key={nextKeyId++}>{user.name}</li>)
        )}
      </ul>
      <button
        disabled={users.length === 20 ? true : false}
        onClick={handleGetUsersFromServer}
      >
        Get users from server
      </button>
    </div>
  );
};
