var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
var morgan = require("morgan");
var socket = require('socket.io')

var http = require("http");
var app = express();



// io.on('connection', (userAddress) => {

//     console.log('a user connected');

// });

// io.on('disconnect', (userAddress) => {

//     console.log('a user disconnected');

// });





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(morgan('dev'))

const PORT = process.env.PORT || 5000;
var server = http.createServer(app);

const io = socket(server, { cors: { origin: "*", methods: "*", } });







server.listen(PORT, () => {
    console.log("Server is running on ", PORT);
})