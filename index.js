const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Folder to serve static files

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
