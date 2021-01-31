import {
    NOTE_CREATED,
    ADD_REMINDER,
    ADD_LABEL
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
        case 'NOTE_EDITED':

            return {
                
                noteToBeEdited:action.payload,
                 editNote:true
                // title: action.payload.title,
                // content: action.payload.content,
                // imageToAdd: action.payload.imageToAdd,
                // archive: action.payload.archive,
                // pinned: action.payload.pinned,
                // reminder: action.payload.reminder,
                // labels: action.payload.labels,
                // listItems: action.payload.listItems,
               
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
            case 'NOTE_RESET':
                return{
                    state:initialState
                }
        default:
            return state
    }
}

export default noteReducer