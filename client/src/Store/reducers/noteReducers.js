import {
    NOTE_RESET,
    ADD_REMINDER,
    ADD_LABEL,
    NOTE_EDITED
} from '../actionTypes'

const initialState = {
    title: '',
    content: '',
    imageToAdd: '',
    archive: false,
    pinned: false,
    reminder: '',
    labels: [],
    listItems: [],
    editNote:false,
    noteToBeEdited:null
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTE_EDITED:

            return {
                
                noteToBeEdited:action.payload,
                 editNote:true
                
               
            }
        case ADD_REMINDER:
           
            return {
                ...state,
                reminder:action.payload.reminder
            }


            case ADD_LABEL:
                console.log(state);
                return {
                    ...state,
                    labels:action.payload.label
                }
            case NOTE_RESET:
                return{
                    state:initialState
                }
        default:
            return state
    }
}

export default noteReducer