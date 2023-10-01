import { GET_COMMITS, GET_SEARCH } from "../actions/types";



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
        case GET_SEARCH:
            return{
                ...state,
                commits: actions.payload,
            }
        default:
            return state;
    }
}

export default reducer;