const express = require('express'); // Подключение Express

const app = express(); // Инициализация приложения 
const server = require('http').Server(app); // Работа сервера через Express
const io = require('socket.io')(server)// Подключение Socket к серверу Express

app.use(express.json()); // Способ получения json данных с фронта

const rooms = []; // Список комнат


// Функция для создания пользователя и его комнаты
function Room(userId, userName) {  
                this.userId = userId,
                this.userName = userName,
                this.rooms = [],
                this.userRoom = {
                    users: [],
                    messages: {
                        Ivan: ['Сообщение 1', new Date().getFullYear(), new Date().getHours(), new Date().getMinutes()],
                        Max: ['Сообщение 2', new Date().getFullYear(), new Date().getHours(), new Date().getMinutes()],
                        Sergey: ['Сообщение 3', new Date().getFullYear(), new Date().getHours(), new Date().getMinutes()],
                        Alex: ['Сообщение 4', new Date().getFullYear(), new Date().getHours(), new Date().getMinutes()]
                    }
                }
}

app.get('/rooms', (req, res) => {
    res.json(rooms[rooms.length - 1]);
});

// Получение данных с инпута и создание юзера с личной комнатой
app.post('/rooms', (req, res) => {
    const {userId, userName} = req.body;
});

io.on('connection', (socket) => {                // Cоздание юзера, его комнаты, рендер сообщений в чате и отправка их пользователю
    socket.on('ROOM:AUTH', (data) => {
        let user = new Room(data.userId, data.userName);
        user.userRoom.users.push(data.userName);
        user.rooms.push(user.userId);
        rooms.push(user);
        console.log(data);
            rooms.forEach(item => {
                if(item.userId == user.userId) { 
                    console.log(item.userId);
                    socket.join(user.userId);
                    io.to(user.userId).emit('ROOM:EXPORT', JSON.stringify(item));
            }
        })
        // socket.join(data.userId);
        // rooms.forEach(item => {
        //     if (item.userId == data.userId) {
        //         item.get(item.userId).get(item.userRoom.users).set([socket.id, item.UserName]);
        //         const users = item.get(item.userId).get(...item.userRoom.users);
        //         socket.emit('ROOM:JOINED', users);
        //     }
        // })
    })

    console.log('socket connect', socket.id);
})

server.listen(8888, (err) => { 
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен');
}); // Установка локального порта