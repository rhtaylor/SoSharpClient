const rootReducer = (state = {admin_in: false}, action) =>{
    debugger
    switch(action.type){ 
        case 'IS_ADMIN': 
        return {...state, admin_in: action.payload} 
        default: 
        return state
    }
   
} 
export {rootReducer}