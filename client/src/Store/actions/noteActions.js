import {ADD_REMINDER,ADD_LABEL,NOTE_EDITED} from '../actionTypes'


export const addReminder=(data)=>{
    
return{
    type:ADD_REMINDER,
    payload:data
}
}


export const addLabel=(data)=>{
    console.log(data);
    return{
        type:ADD_LABEL,
        payload:data
    }
    }

    export const editNote=(data)=>{
        
        return{
            type:NOTE_EDITED,
            payload:data
        }
        }
    
        
    export const resetData=()=>{
        // console.log(data);
        return{
            type:'NOTE_RESET'
            
        }
        }

