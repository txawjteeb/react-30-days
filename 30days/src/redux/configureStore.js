import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { rootReducer, initialState } from './reducers'

const Root = (props) => {
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export const configureStore = () => {
  const store = createStore(
    rootReducer, // root reducer
    initialState, // our initialState
  );

  return store;
}

export default configureStore;