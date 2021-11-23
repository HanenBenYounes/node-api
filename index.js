const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/', postsRoutes);
app.listen( 3001, ()=> console.log('serveur started'));