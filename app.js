const express = require('express');

const landmarkRouter = require('./routes/landmarkRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();

app.use(express.json());

app.use('./api/v1/landmarks',landmarkrouter);
app.use('/api/v1/users',userRouter);

module.exports = app;