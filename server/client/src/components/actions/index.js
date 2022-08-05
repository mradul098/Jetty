export const incNumber = (num) => {
    return {
        type: 'INCREMENT'
    }
}

export const checkLoggedin= () =>{
    return {
        type:'LOGINCHECK'
    }
}

export const setEmail= (email) =>{
    return {
        type:'EMAILSET',
        payload:email
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};