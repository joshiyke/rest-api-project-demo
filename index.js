const express = require('express');

const { json } = require('express');

const user = require('./router/userRoute');

const app = express();

app.use(json());

app.use('/user', user);

const PORT = process.env.PORT || 3000; // port of connect

app.get('/', (req, res) => {
  res.send('Zuri Training Portal');
});

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
