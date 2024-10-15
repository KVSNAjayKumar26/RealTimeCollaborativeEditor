import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import UserList from './components/UserList';
import { Container, GlobalStyle, Header } from './components/styles';
import Editor from './components/Editor';
import { motion } from 'framer-motion';
const socket = io('http://localhost:4000')
const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // New state for current user
  useEffect(() => {
    // Listen for the 'connect' event to ensure socket.id is available
    socket.on('connect', () => {
      const user = { id: socket.id, name: `User ${socket.id.substring(0, 5)}` };
      setCurrentUser(user); // Set the current user state
      socket.emit('userConnected', user);
    });

    socket.on('userList', (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off('userList');
      socket.off('connect');
    };
  }, []);
  return (
    <Container>
    <GlobalStyle />
    <Header as={motion.h1} initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Collaborative Text Editor</Header>
    <UserList users={users} />
    {currentUser ? <Editor socket={socket} /> : <p>Connecting...</p>}
  </Container>
  );
};

export default App;