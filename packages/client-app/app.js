const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/app', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`InOffice Pay Web running at http://localhost:${port}`);
});
