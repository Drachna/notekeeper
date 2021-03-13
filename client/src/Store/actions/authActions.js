import axios from 'axios'
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGGED_OUT
}
  from '../actionTypes'

export const loginSucces = (data) => {

  return {
    type: LOGIN_SUCCESS,
    payload: data
  }

}

export const loginFailure = (data) => {
  return {
    type: LOGIN_FAILURE,
    payload: data
  }

}



export const logOutSuccess = (data) => {
  return {
    type: LOGGED_OUT,
    payload: data
  }

}


export const login = (data) => {
  return (dispatch) => {
    axios.post('/api/login', data)
      .then(res => {
        dispatch(loginSucces(res.data))
      })
      .catch(err => {
        console.log(err, err.response.data);
        dispatch(loginFailure(err.response.data))
      })
  }
}

export const registrationSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  }
}

export const registrationFailure = (data) => {
  return {
    type: REGISTER_FAILURE
  }
}

export const register = (data) => {
  return (dispatch) => {
    axios.post('/api/register', data)
      .then(res => {
        dispatch(registrationSuccess(res.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(registrationFailure())
      })
  }
}


export const checkAuthStatus = () => {
  return (dispatch) => {
    axios.get('/api/getUser')
      .then(response => {
        dispatch(loginSucces(response.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(loginFailure(err.response.data))
      })
  }

}

export const logOut = () => {
  return (dispatch) => {
    axios.get('/api/logout')
      .then(res => {
        dispatch(logOutSuccess(res.data))
      })
  }
}