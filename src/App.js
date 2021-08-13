import React from 'react';
import BlockReg from './components/BlockReg';
import Room from './components/rooms';
import reducer from './reducer';
import socket from './socket';

  function App() {

  const [state, dispatch] = React.useReducer(reducer, { // Reducer для переключения флага авторизации
    isAuth: false,
    userName: null,
    userId: null,
  });
  
  const onSignIn = (user) => { // Функция переключающая поле авторизации в state
      dispatch({
          type: 'AUTH',
          payload: user,
      });
      socket.emit('ROOM:AUTH', user);
  };

  socket.on('ROOM:JOINED', users => {
    console.log('Новый пользователь', users);
  })

  window.socket = socket;

  return (
    <div className="reg">
      {!state.isAuth ? <BlockReg onSignIn={onSignIn}/> : <Room /> }
    </div>
  );
};

export default App;
