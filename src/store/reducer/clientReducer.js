const clientReducer = (state = {haircuts: []}, action) =>{
    debugger
    switch(action.type){
        case 'SIGN_IN': 
        return {...state,  
            haircuts: [...state.haircuts, action.payload]};
        case 'WAITING': 
        return {...state, waiting: [action.payload]}
        default: 
        return state
    }
   
} 
export default clientReducer;