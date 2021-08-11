import React from 'react';
import axios from 'axios';
import socket from '../socket';

function BlockReg() {
    const [userName, setUserName] = React.useState('');

    class User {
        constructor (userName, userId){
            this.userName = userName;
            this.userId = userId;
        }
    }

    class Service {
        generatedId() {
            let id = '';
            id += parseInt(Math.random() * 100 + 1)
            return id;
        }
    }

    class Api {
        async saveUser(obj) {
            await axios.post('/rooms', obj);
        }
    }

    const id = new Service();
    const api = new Api();

    const onEnter = () => {
        if(!userName) {
            return alert('Введите свое имя');
        }
        let user = new User(userName, id.generatedId());
        api.saveUser(user);
    }

    return (
        <div className="box">
            <input 
            className="reg_input" 
            type="text" 
            placeholder="Введите ваше имя" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} />
            <button onClick={onEnter} className="reg_button">Войти</button>
        </div>
    );
}

export default BlockReg;