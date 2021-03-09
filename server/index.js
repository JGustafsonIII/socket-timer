const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('message', ({ name, message }) => {
    console.log(name, message);
    io.emit('message', { name, message });
  });
});

http.listen(8000, function () {
  console.log('Listening on port 8000');
});
