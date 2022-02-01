export const SIGN_IN = ({fullName, phone,  barber, checkInTime}) => {
        return (dispatch) => {
            dispatch({
                type: 'SIGN_IN', 
                payload: {fullName, phone, barber, checkInTime}
            })
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

export const ROOT_USER = ({password}) => {
    return (dispatch) => {
        dispatch({ 
            type: 'ROOT_USER',
            payload: {password}
        })
    }
}