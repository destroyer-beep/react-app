import React from 'react';
import Service from './service';
import {User} from './service';
import axios from 'axios';


function BlockReg({ onSignIn }) {
    const [userName, setUserName] = React.useState('');


    const id = new Service();

    const onEnter = () => {
        if (!userName) {
            return alert('Введите свое имя');
        }
        let user = new User(userName, id.generatedId());
        axios.post('/rooms', user)
            .then(onSignIn());
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