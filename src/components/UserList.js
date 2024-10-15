// src/UserList.js
import React from 'react';
import { UserListContainer, UserListItem } from './styles';

const UserList = ({ users }) => {
  return (
    <UserListContainer>
      <h3>Active Users:</h3>
      <ul>
        {users.map((user) => (
          <UserListItem key={user.id}>{user.name}</UserListItem>
        ))}
      </ul>
    </UserListContainer>
  );
};

export default UserList;
