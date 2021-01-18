import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    CHECK_AUTH_STATUS,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from '../actionTypes'

const initialState = {
    status: 'NOT_LOGGED_IN',
    errorMessage: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_AUTH_STATUS:
            return {
                ...state,
                status: action.payload.status
            }

        case LOGIN_SUCCESS:
            return {
                status: action.payload.status,
                errorMessage: null
            }
        case LOGIN_FAILURE:
            return {
                status: action.payload.status,
                errorMessage: action.payload.message
            }
        case REGISTER_SUCCESS:
            return {
                status: action.payload.status,
                errorMessage: null
            }

        case REGISTER_FAILURE:
            return {
                tatus: action.payload.status,
                errorMessage: action.payload.message
            }
        default:
            return state
    }

}

export default authReducer
