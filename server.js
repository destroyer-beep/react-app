const express = require('express'); // Подключение Express

const app = express(); // Инициализация приложения 
const server = require('http').Server(app); // Работа сервера через Express
const io = require('socket.io')(server)// Подключение Socket к серверу Express

app.use(express.json()); // Способ получения json данных с фронта

const rooms = []; // Список комнат


// Функция для создания пользователя и его комнаты
function userCreate(userId, userName) {  
                this.userId = userId,
                this.userName = userName,
                this.userRoom = {
                    users: [],
                    messages: {}
                }
}

app.get('/rooms', (req, res) => {
    res.json(rooms[rooms.length - 1]);
});

// Получение данных с инпута и создание юзера с личной комнатой
app.post('/rooms', (req, res) => {
    const {userId, userName} = req.body;
    let user = new userCreate(userId, userName);
    rooms.push(user);
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