import { FETCH_NOTES, NOTE_CREATED } from '../actionTypes'

const initialState = {
    notes: [],
    errorMessage: ''
}

const handleNotesReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_NOTES:
            // console.log('in here');
            return {
                ...state,
                notes: action.payload
            }

        case NOTE_CREATED:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        default:
            console.log('in here');
            return state
    }

}

export default handleNotesReducer