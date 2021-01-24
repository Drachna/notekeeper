import axios from 'axios'
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  CHECK_AUTH_STATUS
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

export const login = (data) => {
  return (dispatch) => {
    axios.post('/api/login', data)
      .then(res => {
        console.log(res.data);
        dispatch(loginSucces(data))
      })
      .catch(err => {
        console.log(err);
        dispatch(loginFailure(data))
      })
  }
}

export const registrationSuccess=(data)=>{
  return {
    type:REGISTER_SUCCESS,
    payload:data
  }
}

export const registrationFailure=(data)=>{
  return {
    type:REGISTER_FAILURE
   
  }
}

export const register=(data)=>{
  return (dispatch)=>{
    axios.post('/api/register',data)
    .then(res=>{
      console.log(res.data);
      dispatch(registrationSuccess(res.data))
    })
    .catch(err=>{
      console.log(err);
      dispatch(registrationFailure())
    })
  }
}


export const checkAuthStatus = () => {
  return (dispatch) => {
      // console.log('inhere')
      axios.get('/api/getUser')
          .then(response => {
              console.log(response.data, 'data')
              // const userData = response.data.status
              dispatch(loginSucces(response.data))
          })
          .catch(err => {
              console.log(err);
              // dispatch()
          })
  }

}

