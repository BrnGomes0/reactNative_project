export const SET_TOKEN = 'SET_TOKEN'
export const SET_SIGNED = 'SET_SIGNED'

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};


export const setSigned = signed => dispatch => {
  dispatch({
    type: SET_SIGNED,
    payload: signed
  });
};


