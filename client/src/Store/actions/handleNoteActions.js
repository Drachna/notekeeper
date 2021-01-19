import {FETCH_NOTES} from '../actionTypes'
import axios from'axios'

export const fetchNoteSuccess=(data)=>{
    return {
        type:FETCH_NOTES,
        payload:data
    }
}

export const fetchNotes=()=>{
    return (dispatch)=>{
        axios.get('/api/notes/get_note')
        .then(res=>{
            console.log(res.data);
        })
    }
}