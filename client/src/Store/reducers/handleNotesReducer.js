import {FETCH_NOTES} from '../actionTypes'

const initialState={
    notes:[],
    errorMessage:''
}

const handleNotes=(state=initialState,action)=>{

    switch(action.type){
        case FETCH_NOTES:
            return {
                ...state,
                notes:[...state.notes,action.payload]
            }
        

        default:
            return state
    }

}

export default handleNotes