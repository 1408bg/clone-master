const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '11.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
