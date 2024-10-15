// server/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

let users = [];

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  socket.on('userConnected', (user) => {
    users.push(user);
    io.emit('userList', users);
    socket.join('editor-room');
  });

  socket.on('documentChange', (content) => {
    socket.to('editor-room').emit('documentUpdate', content);
  });

  socket.on('disconnect', () => {
    users = users.filter((user) => user.id !== socket.id);
    io.emit('userList', users);
    console.log('User disconnected: ' + socket.id);
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
