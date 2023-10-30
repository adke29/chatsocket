import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import 'dotenv/config';


const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(new URL('./index.html', import.meta.url).pathname);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    socket.emit('chat message', msg);
    // for (let i = 0; i < 10; i++) {
    //   console.log('sending message: ' + i);
    //   await new Promise((resolve) => setTimeout(()=>{
        
    //     resolve(i)
    //   }, 100));
    // }
  });
});

function delay(i){
  
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('server running at http://localhost:'+ PORT);
});