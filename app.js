const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./routes/user');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(cors());

app.use(bodyParser.json());
app.use(userRoute);

app.listen(8000);

