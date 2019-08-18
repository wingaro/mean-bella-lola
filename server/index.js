require('dotenv').config();
require('./config/config');
require('./database');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');

const rtsIndex = require('./routes/index.router');

var app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./dist/mean-bellalola'));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '/dist/mean-bellalola/server/index.js'));
});

//Routes
app.use(process.env.URL_PRODUCT ,require('./routes/product.routes'));
app.use(process.env.URL_SERVICE ,require('./routes/service.routes'));
app.use(process.env.URL_USER ,require('./routes/user.routes'));
app.use(process.env.URL_CLIENT ,require('./routes/client.routes'));
app.use(process.env.URL_ROL ,require('./routes/rol.routes'));

//Starting the server
app.listen(process.env.PORT, () => console.log('server started in', process.env.PORT));