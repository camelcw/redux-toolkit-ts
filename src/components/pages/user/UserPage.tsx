import React, { useEffect } from 'react';
import UserCard from './UserCard';
import UserList from './UserList';
import {fetchUsers} from "../../../store/reducers/userSlice";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";


const UserPage = () => {
  const { users, error, loading } = useAppSelector((state) => state.users);
    console.log(loading)
  const pages = [1, 2, 3, 4, 5];
  const dispatch = useAppDispatch()
  useEffect(() => {
  dispatch(fetchUsers())
  }, [dispatch]);

console.log(users)
  return (
    <div>
      <UserList
        items={users}
        renderItem={(user) => (
          <UserCard
            key={user.id}
            id={user.id}
            username={user.username}
            name={user.name}
            address={user.address}
            company={user.company}
          />
        )}
      />
    </div>
  );
};

export default UserPage;
