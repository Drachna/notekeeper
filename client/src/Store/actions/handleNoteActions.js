import {FETCH_NOTES,NOTE_CREATED} from '../actionTypes'
import axios from'axios'

export const fetchNoteSuccess=(data)=>{
    
    return {
        type:FETCH_NOTES,
        payload:data
    }
}

export const noteSuccess=(data)=>{
    return {
        type:NOTE_CREATED,
        payload:data
    }
}


export const fetchNotes=()=>{
    return (dispatch)=>{
        axios.get('/api/notes/get_note')
        .then(res=>{
            console.log(res.data);
            dispatch(fetchNoteSuccess(res.data))
        })
    }
}


export const addNote=(data)=>{
    return (dispatch)=>{
        axios.post('/api/notes/addNote',data)
        .then(res=>{
            console.log(res.data);
            dispatch(noteSuccess(res.data))
        })
    }
}


export const saveEditedNote=(data)=>{
    return (dispatch)=>{
        // console.log('in save edit');
        axios.post('/api/notes/edit',data)
        .then(res=>{
            console.log(res.data);
            dispatch(fetchNoteSuccess())
        })
    }
}