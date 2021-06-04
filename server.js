const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser } = require('./utils/users');
const pokemonBot = "Pokemon Bot ";
const compression = require('compression');

//requirements to set up sockets.io
const http = require('http');
const socketio = require('socket.io');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
//socket stuff
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', socket => {
  console.log('new connection');

  //welcome message
  socket.emit('message', formatMessage(pokemonBot, "Welcome to the Trainer Chat") )

  //broadcast when a user connects
  socket.broadcast.emit('message', formatMessage(pokemonBot, "A user has joined the chat"));


//Runs when client disconnects
socket.on('disconnect', () => {
  io.emit('message', formatMessage(pokemonBot, 'A user has left the chat'));
});


// Listen for chatMessage
socket.on('chatMessage', (msg, user) => {
  console.log(user)

  io.emit('message', formatMessage(user, msg));

})


})





// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(compression());

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});