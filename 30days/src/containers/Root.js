import React from 'react';
import App from './App';

const Root = (props) => {
  const store = configureStore();
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;