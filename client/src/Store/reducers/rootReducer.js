import {combineReducers} from 'redux'

import noteReducer  from './noteReducers'
import handleNotesReducer  from './handleNotesReducer'
import authReducer from './authReducers'

const rootReducer=combineReducers({
    note:noteReducer,
    handleNote:handleNotesReducer,
    auth:authReducer
})

export default rootReducer