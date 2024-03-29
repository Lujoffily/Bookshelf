
const path = require('path')
const express = require('express');
const session = require('express-session')
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const exphbs = require("express-handlebars");
const hbs = exphbs.create({})
//end Require


//Begin
const app = express();
const PORT = process.env.PORT || 3001;
const SC = {
    secret: 'Storing Chocolate Chip Cookies',
    cookie:{},
    resave:false,
    saveUninitialized:true,
    store: new SequelizeStore({
        db:sequelize
    })
}
app.use(session(SC))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
