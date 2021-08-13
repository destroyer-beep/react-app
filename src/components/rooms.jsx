import React from 'react';

function Room() {
    
    return (
        <div className="room_box">
            <form className="room_search">
                <label className="search_label" htmlFor="search">Поиск комнаты</label>
                <input className="search_input" type="text" id="search" name="search" placeholder="Введите ID комнаты"/>
                <button className="search_button" type="button">Найти</button>
            </form>

            <div className="tabs">
                <ul className="tabs_items">
                    <li className="tabs_item active">Room 1</li>
                    <li className="tabs_item">Room 2</li>
                    <li className="tabs_item">Room 3</li>
                    <li className="tabs_item">Room 4</li>
                </ul>
            </div>
            <div className="chat">
                <div className="chat_messages">
                    <ul className="messages">
                        <li className="messages_text">Hello World Hello World Hello WorldHello World
                            <span className="messages_user">User</span>
                            <span className="messages_date">{new Date().toLocaleDateString()}</span>
                            <span className="messages_date">{new Date().toLocaleTimeString()}</span>
                        </li>
                        <li className="messages_text">Hello World Hello World Hello WorldHello World
                            <span className="messages_user">User</span>
                            <span className="messages_date">{new Date().toLocaleDateString()}</span>
                            <span className="messages_date">{new Date().toLocaleTimeString()}</span>
                        </li>
                        <li className="messages_text">Hello World Hello World Hello WorldHello World
                            <span className="messages_user">User</span>
                            <span className="messages_date">{new Date().toLocaleDateString()}</span>
                            <span className="messages_date">{new Date().toLocaleTimeString()}</span>
                        </li>
                        <li className="messages_text">Hello World
                            <span className="messages_user">User</span>
                            <span className="messages_date">{new Date().toLocaleDateString()}</span>
                            <span className="messages_date">{new Date().toLocaleTimeString()}</span>
                        </li>
                        <li className="messages_text">Hello World Hello World Hello World Hello WorldHello World Hello World Hello World Hello WorldHello World Hello World Hello World Hello WorldHello World
                            <span className="messages_user">User</span>
                            <span className="messages_date">{new Date().toLocaleDateString()}</span>
                            <span className="messages_date">{new Date().toLocaleTimeString()}</span>
                        </li>
                    </ul>
                </div>
                <div className="chat_users">
                    <ul className="users">
                        <li className="user_name">User1</li>
                        <li className="user_name">User2</li>
                        <li className="user_name">User3</li>
                        <li className="user_name">User4</li>
                    </ul>
                </div>
            </div>
            <form className="form_message" action="#">
                <textarea className="form_input" rows="4"></textarea>
                <button className="form_button" type="button">Отправить</button>
            </form>
        </div>
    )
}

export default Room;