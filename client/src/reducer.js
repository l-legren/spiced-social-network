export default function reducer(state = {}, action) {
    if (action.type == "SHOW_FRIENDS") {
        state = {
            ...state,
            friends: action.friendsList,
        };
    }

    if (action.type == "SHOW_REQUESTERS") {
        state = {
            ...state,
            requests: action.requestersList,
        };
    }

    if (action.type == "SHOW_OPEN_REQUESTS") {
        state = {
            ...state,
            openRequests: action.openRequestsList,
        };
    }

    console.log('Redux state', state);
    return state;
}
