import userActionTypes from "./user.types";
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return { // we spreading here because in this object we are returning, the state might contain other stuff like shopping state so we dont wanna lose that 
                ...state,
                currentUser: action.payload
            } // we basically saying copy everything that is in the current user and change the state of the currentUser
            break;
    
        default:
            return state;
    }
}

export default userReducer;