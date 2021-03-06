export const SIGN_IN = ({firstName, lastName, phone,  barber, checkInTime}) => {
        return {
                type: 'SIGN_IN', 
                payload: {firstName, lastName,  barber, checkInTime}
            }
} 

export const SIGNED_IN = ({phone, barber}) => {
    return (dispatch) => {
        dispatch({ 
            type: 'SIGNED_IN', 
            payload: {phone, barber}
        })
    }
} 

export const ROOT_USER = (password) => { 
        return{ 
            type: 'IS_ADMIN',
            payload: true
        }
} 

export const DARK_MODE = (mode) => { 
    return{ 
        type: 'IS_DARK',
        payload: true
    }
} 

export const LITE_MODE = (mode) => { 
    return{ 
        type: 'IS_DARK',
        payload: false
    }
}