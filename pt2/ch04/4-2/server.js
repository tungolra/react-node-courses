import {createServer} from 'http';
import {Server} from 'socket.io';

const server = createServer().listen(3000);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
} );