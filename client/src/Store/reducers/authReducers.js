import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    CHECK_AUTH_STATUS,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from '../actionTypes'

const initialState = {
    status: 'NOT_LOGGED_IN',
    failed:false,
    errorMessage:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_AUTH_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        case 'LOGGED_OUT':
            return {
                
                ...state,
                status:action.payload.status
            }
        case LOGIN_SUCCESS:
            console.log(state);
            return {
                ...state,
                status: action.payload.status,
                errorMessage: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                status: action.payload.status,
                errorMessage: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                status: action.payload.status,
                errorMessage: null
            }

        case REGISTER_FAILURE:
            return {
                ...state,
                status:'note',
                failed:true,
                errorMessage: 'afgdfs'
            }
        default:{
             
            return {...state}
        }
    }

}

export default authReducer
