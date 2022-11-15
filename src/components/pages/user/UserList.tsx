import React from 'react';


interface UserListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function UserList<T>(props: UserListProps<T>) {
  return (
    <div>
      <h1>Список Пользователей</h1>
      {props.items.map(props.renderItem)}
    </div>
  );
}
