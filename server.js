const express = require('express'); // Подключение Express

const app = express(); // Инициализация приложения 
const server = require('http').Server(app); // Работа сервера через Express
const io = require('socket.io')(server)// Подключение Socket к серверу Express

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
console.log('Hello World');
});

io.on('connection', (socket) => {
    console.log('socket connect', socket.id);
})

server.listen(8888, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен');
}); // Установка локального порта