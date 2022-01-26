const clientReducer = (state = {}, action) =>{

    switch(action.type){
        case 'SIGN_IN': 
        return {...state, haircut: action.payload} 
        default: 
        return state
    }
   
} 
export default clientReducer;