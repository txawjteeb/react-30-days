import * as types from './types';

{
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString() // Any serializable value
}

// Initial (starting) state
const initialState = {
  currentTime: new Date().toString()
}

// Our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_NEW_TIME:
      return { ...state, currentTime: action.payload}
    default:
      return state;
  }
}

export default rootReducer