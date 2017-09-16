export const FETCH_NEW_TIME = 'FETCH_NEW_TIME';

store.dispatch({
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString()
})