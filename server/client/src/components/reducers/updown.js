const initialState = {
    email:null,
    num:0
};
const isloggedin=sessionStorage.getItem("patterq-isLoggedIn") === "LOGGED_IN" ? true:false;


const changeTheNumber = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        
        case "INCREMENT": return {...state, num: state.num + 1};
        case "DECREMENT": return {...state, num: state.num - 1};
        case "LOGINCHECK": return isloggedin;
        case 'EMAILSET': return {...state,email:action.payload};
            

        default: return state;
    }
}

export default changeTheNumber;