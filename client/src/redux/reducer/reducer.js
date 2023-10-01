import { GET_COMMITS, GET_COMMIT_DETAIL, GET_SEARCH } from "../actions/types";



const initialState = {
    commits: [],
    commitDetail:"",
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
        case GET_COMMIT_DETAIL:
            return{
                ...state,
                commitDetail: actions.payload,
            }
        default:
            return state;
    }
}

export default reducer;