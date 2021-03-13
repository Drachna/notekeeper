import { FETCH_NOTES, NOTE_CREATED,RESET } from '../actionTypes'

const initialState = {
    notes: [],
    errorMessage: ''
}

const handleNotesReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_NOTES:
            
            return {
                ...state,
                notes: action.payload
            }
        case RESET:
            return{
                ...state,
                notes:[]
            }

        case NOTE_CREATED:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        default:
            
            return {
                ...state
            }
    }

}

export default handleNotesReducer