import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { rootReducer, initialState } from './reducers'
import { reducer, initialState as userInitialState } from './currentUser'

const Root = (props) => {
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      time: rootReducer,
      user: reducer
    }), // root reducer
    {
      time: initialState, 
      user: userInitialState
    }, // our initialState
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