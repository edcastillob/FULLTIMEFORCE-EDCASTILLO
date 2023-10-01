import { GET_COMMITS } from "../actions/types";



const initialState = {
    commits: [],
}

function reducer( state = initialState, actions ){
    switch ( actions.type ){
        case GET_COMMITS:
            return{
                ...state,
                commits: actions.payload,
            }
        default:
            return state;
    }
}

export default reducer;