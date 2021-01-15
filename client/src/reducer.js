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
            requestsToUser: action.requestersList,
            requestsFromUser: action.openRequests
        };
    }

    console.log('Redux state', state);
    return state;
}
