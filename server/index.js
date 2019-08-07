require('dotenv').config();
require('./database');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();



//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//llamar index
app.use(express.static('./dist/mean-bellalola'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/mean-bellalola/server/index.js'));
});


//Routes
app.use(process.env.URL_PRODUCT ,require('./routes/product.routes'));
app.use(process.env.URL_SERVICE ,require('./routes/service.routes'));
app.use(process.env.URL_USER ,require('./routes/user.routes'));
app.use(process.env.URL_CLIENT ,require('./routes/client.routes'));

//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
