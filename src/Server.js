import app from './App';

const server = require('http').Server(app);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
