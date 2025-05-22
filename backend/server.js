const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const weatherRouter = require('./routes/weatherRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.use('/api/weather', weatherRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has running on ${port} port.`));
