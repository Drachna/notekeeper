import {
    NOTE_CREATED,
    ADD_REMINDER,
    ADD_LABEL
} from '../actionTypes'

const initialState = {
    title: '',
    content: '',
    image: '',
    archive: false,
    pinned: false,
    reminder: [],
    label: [],
    listItems: []
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTE_CREATED:
            return {
                ...state,
                title: action.payload.title,
                content: action.payload.content,
                image: action.payload.image,
                archive: action.payload.archive,
                pinned: action.payload.pinned,
                reminder: action.payload.reminder,
                label: action.payload.label,
                listItems: action.payload.listItems
            }
        case ADD_REMINDER:
            return {
                ...state,
                reminder:[...state.reminder,action.payload]
            }


            case ADD_LABEL:
                return {
                    ...state,
                    label:[...state.label,action.payload]
                }
        default:
            return state
    }
}

export default noteReducer