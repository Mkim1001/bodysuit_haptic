var com = require("serialport");
var express = require('express');
//create express object named app
var app = express();

var server = app.listen(3000);
var io = require('socket.io')(server);

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/cu.usbmodem14201", {
    baudRate: 9600
});

app.use(express.static('public'));

//Serve index.html when some make a request of the server
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const parser = port.pipe(new Readline({
    delimiter: "\r\n"
}));

parser.on("data", function (data) {
    console.log(data);
    io.sockets.emit('data', data);
});

io.on('connection', function (socket) {
    socket.on('data', function (msg) {
        console.log(msg.val);
        if (msg.val === "f_right_shoulde") {
            port.write('a\n')
        }
        console.log(msg.val);
        if (msg.val === "f_left_shoulde") {
            port.write('b\n')
        }
        console.log(msg.val);
        if (msg.val === "f_chest") {
            port.write('c\n')
        }
        console.log(msg.val);
        if (msg.val === "up_belly") {
            port.write('d\n')
        }
        console.log(msg.val);
        if (msg.val === "low_belly") {
            port.write('e\n')
        }
        console.log(msg.val);
        if (msg.val === "right_arm") {
            port.write('f\n')
        }
        console.log(msg.val);
        if (msg.val === "left_arm") {
            port.write('g\n')
        }
        console.log(msg.val);
        if (msg.val === "back") {
            port.write('h\n')
        }
        console.log(msg.val);
        if (msg.val === "b_left_shoulder") {
            port.write('i\n')
        }
        console.log(msg.val);
        if (msg.val === "b_right_shoulder") {
            port.write('j\n')
        }
        console.log(msg.val);
        if (msg.val === "spine") {
            port.write('k\n')
        }
        console.log(msg.val);
        if (msg.val === "neck") {
            port.write('l\n')
        }
        console.log(msg.val);
        if (msg.val === "low_back") {
            port.write('m\n')
        }
    });
});

io.on('error', function () {
    console.error(arguments)
});