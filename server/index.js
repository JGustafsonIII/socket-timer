const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('connect', () => {
    io.emit('New User');
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // When the chat message event is emitted it returns this
  socket.on('chat message', ({ name, message }) => {
    io.emit('message', { name, message });
  });
});

http.listen(8000, function () {
  console.log('Listening on port 8000');
});
