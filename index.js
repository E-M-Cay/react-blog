const express = require('express');
const app = express();
const dbconnexion = require('./db');
const dotenv = require('dotenv');
dotenv.config();
//Routing

dbconnexion();

app.use(express.json({ extended: false }));
//localhost:5000/api/users/reqister
//localhost:5000/api/users ---pour index
app.use('/api/users/register', require('./routes/api/users/register'));
app.use('/api/users/login', require('./routes/api/users/login'));
app.use('/api/users/update', require('./routes/api/users/update'));
app.use('/api/users', require('./routes/api/users'));

const port = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   //   res.send('<p>Servi par express </p>');
//   res.json({ msg: 'Servi par node js' });
// });

app.listen(port);
// dans node
// console.log(`Server Started on port : ${port}`);
