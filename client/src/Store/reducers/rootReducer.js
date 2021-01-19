import {combineReducers} from 'redux'

import noteReducer  from './noteReducers'
import handleNotesReducer  from './handleNotesReducer'
// import noteReducer  from './noteReducers'

const rootReducer=combineReducers({
    note:noteReducer,
    handleNote:handleNotesReducer
})

export default rootReducer