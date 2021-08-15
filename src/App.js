import React from 'react';
import BlockReg from './components/BlockReg';
import Room from './components/rooms';
import reducer from './reducer';
import socket from './socket';

  function App() {

  const [roomData, setRoomData] = React.useState({}); // State для 
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

  // Получение данных комнаты с сервера
  React.useEffect(() => {
    socket.on('ROOM:EXPORT', data => {
      let roomData = JSON.parse(data);
      console.log(data)
      setRoomData(roomData);
    })
  }, []);

  window.socket = socket;

  return (
    <div className="reg">
      {!state.isAuth ? <BlockReg onSignIn={onSignIn}/> : <Room roomData={roomData} /> }
    </div>
  );
};

export default App;
