export default class Service {                                   // Генерация случайного ID
        generatedId() {
            let id = '';
            for (let i = 0; i < 4; i++) {
                id += Math.floor(Math.random() * 9 + 1);
            }
            return id;
            }
        }

export class User {                                      // Создание каждого пользователя с уникальным ID
        constructor(userName, userId) {
            this.userName = userName;
            this.userId = userId;
        }
    }