import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers'
import { reducer, initialState as userInitialState } from './currentUser'
import loggingMiddleware from './loggingMiddleware';
import apiMiddleware from './apiMiddleware';

const Root = (props) => {
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      loggingMiddleware,
    )
  );

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      loggingMiddleware,
    )
  );

  return store;
}

export const login = (user) => ({
  type: types.LOGIN,
  payload: user
})
  // ...
export const logout = () => ({
  type: types.LOGOUT,
})

export default configureStore;