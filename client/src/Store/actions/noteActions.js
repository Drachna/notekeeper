import {NOTE_CREATED} from '../actionTypes'
import axios from 'axios'


export const noteSuccess=(data)=>{
    return {
        type:NOTE_CREATED,
        payload:data
    }
}

export const addNote=(data)=>{
    return (dispatch)=>{
        axios.post('/api/notes/addNote',data)
        .then(res=>{
            console.log(res.data);
        })
    }
}