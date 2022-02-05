const rootReducer = (state = {admin_in: false}, action) =>{
        debugger
    switch(action.type){ 
        case 'IS_ADMIN': 
        return {...state, admin_in: action.payload}
        case 'IS_DARK': 
        return {...state, dark_mode: action.payload};
        default: 
        return state
    }
   
} 
export {rootReducer}