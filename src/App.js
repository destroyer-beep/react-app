import React from 'react';
import BlockReg from './components/BlockReg';
import reducer from './reducer';

  function App() {

  const [state, dispatch] = React.useReducer(reducer, {
    isAuth: false,
  });
  
  const onSignIn = () => {
      dispatch({
          type: 'AUTH',
          payload: true,
      });
  };

  console.log(state);

  return (
    <div className="reg">
      <BlockReg onSignIn={onSignIn} />
    </div>
  );
};

export default App;
