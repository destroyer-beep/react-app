import React from 'react';
import socket from '../socket';

function Room({ roomData }) {
    const [message, setMessage] = React.useState('');

    if (!Object.keys(roomData).length) {  // Проверка State сообщений
        return null;
    }

    // Вывод сообщений 

    function messageParse(obj) {
        let arrMessage = [];
        for (let item in obj) {
                arrMessage.push(
                    <li key={Math.random()} className="messages_text">{obj[item][0]}
                        <span key={Math.random()} className="messages_user">{item}</span>
                        <span key={Math.random()} className="messages_date">{obj[item][1]}</span>
                        <span key={Math.random()} className="messages_date">{obj[item][2]}:{obj[item][3] > 10 ? obj[item][3] : `0${obj[item][3]}`}</span>
                    </li>
                )
        }
        return arrMessage;
    }

    const onMessage = () => {
        if (!message) {
            return alert('Введите сообщение!');
        }

        socket.emit('ROOM:MESSAGE', message);
    }

    return (
        <div className="room_box">
            <form className="room_search">
                <label className="search_label" htmlFor="search">Поиск комнаты</label>
                <input className="search_input" type="text" id="search" name="search" placeholder="Введите ID комнаты"/>
                <button className="search_button" type="button">Найти</button>
            </form>

            <div className="tabs">
                <ul className="tabs_items">
                    {roomData.rooms.map(item => <li key={item} className="tabs_item active">{item}</li>)}
                </ul>
            </div>
            <div className="chat">
                <div className="chat_messages">
                    <ul className="messages">
                        {messageParse(roomData.userRoom.messages)}
                    </ul>
                </div>
                <div className="chat_users">
                    <ul className="users">
                        {roomData.userRoom.users.map(item => <li key={item} className="user_name">{item}</li>)}
                    </ul>
                </div>
            </div>
            <form className="form_message" action="#">
                <textarea className="form_input" value={message} onChange={(e) => setMessage(e.target.value)} rows="4"></textarea>
                <button className="form_button" onClick={onMessage} type="button">Отправить</button>
            </form>
        </div>
    )
}

export default Room;