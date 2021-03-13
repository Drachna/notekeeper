import {FETCH_NOTES,NOTE_CREATED} from '../actionTypes'
import axios from'axios'

export const fetchNoteSuccess=(data)=>{
    return {
        type:FETCH_NOTES,
        payload:data
    }
}

export const resetState=()=>{
    return {
        type:'RESET'      
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
        axios.get('/api/notes/getNotes')
        .then(res=>{
          
            dispatch(fetchNoteSuccess(res.data))
        })
    }
}


export const addNote=(data)=>{
    
    return (dispatch)=>{
        axios.post('/api/notes/addNote',data)
        .then(res=>{
           
            dispatch(noteSuccess(res.data))
        })
    }
}


export const saveEditedNote=(data)=>{
    return (dispatch)=>{
     
        axios.post('/api/notes/edit',data)
        .then(res=>{
            
            dispatch(fetchNotes())
        })
    }
}

export const deleteNote=(id)=>{
    return (dispatch)=>{
      
        axios.delete(`/api/note/deleteNote/${id}`)
        .then(res=>{
            
            dispatch(fetchNotes())
        })
    }
}


export const getReminder=()=>{
    return (dispatch)=>{
        axios.get('/api/notes/getReminders')
        .then(res=>{
          
            dispatch(fetchNoteSuccess(res.data))
        })
    }
}

export const getArchiveNotes=()=>{
    return (dispatch)=>{
        axios.get('/api/notes/getArchiveNotes')
        .then(res=>{
          
            dispatch(fetchNoteSuccess(res.data))
        })
    }
}
export const getPinnedNotes=()=>{
    return (dispatch)=>{
        axios.get('/api/notes/getPinnedNotes')
        .then(res=>{
            console.log(res.data);
        })
    }
}

export const getlistItems=()=>{
    return (dispatch)=>{
        
        axios.get('/api/notes/getlistItems')
        .then(res=>{
            
            dispatch(fetchNoteSuccess(res.data))
        })
    }
}