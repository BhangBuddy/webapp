const express =require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors =require('cors');
const port = 8000;
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');

const db = require('./config/mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(cors());
app.use(express.urlencoded());
app.use(express.json())
app.use(cookieParser());
app.use(session({
    name: 'Bhangola',
   
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            collection: 'sessions',
            autoRemove: 'disabled',
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup yup');
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes')); 
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});