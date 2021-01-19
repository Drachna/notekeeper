import {NOTE_CREATED,ADD_REMINDER,ADD_LABEL} from '../actionTypes'
import axios from 'axios'


export const noteSuccess=(data)=>{
    return {
        type:NOTE_CREATED,
        payload:data
    }
}

export const addReminder=(data)=>{
return{
    type:ADD_REMINDER,
    payload:data
}
}


export const addLabel=(data)=>{
    return{
        type:ADD_LABEL,
        payload:data
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