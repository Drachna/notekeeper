import {
    NOTE_CREATED
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

        default:
            return state
    }
}

export default noteReducer