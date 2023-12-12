import {
    SET_TOKEN,
    SET_SIGNED,

} from "./actions";

const initialSTate = {
    token: '',
    signed: true,
}



function userReducer(state = initialSTate, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload }
        case SET_SIGNED:
            return { ...state, signed: action.payload }
        default:
            return state;
    }
}


export default userReducer;