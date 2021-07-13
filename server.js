const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');



const app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + "/app/views");

app.use(express.static(__dirname + "/app/public"));

require('dotenv').config()
const port = process.env.PORT || 3000;

//Creacion de la BD
const db = require("./app/models");
const { user } = require('./app/models');
db.sequelize.sync();
//const cookieParser = require('cookie-parser');

//Invocamos a bcryptjs

const { Connection } = require('pg');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', require("./app/routes/users.routes"));
app.use('/citas',require("./app/routes/citas.routes"));  
//require("./app/routes/citas.routes")(app);
app.use('/home', require("./app/routes/home.routes"));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});