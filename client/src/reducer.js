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
            requestsFromUser: action.openRequests,
        };
    }

    if (action.type == "ACCEPT_FRIENDSHIP") {
        state = {
            ...state,
            requestsToUser: (state.requestsToUser.filter(
                (user) => user.id != action.acceptedId
            )),
            friends: (state.friends.push(
                state.requestsToUser.filter(
                    (user) => user.id == action.acceptedId
                )
            )),
        };
    }

    console.log("Redux state", state);
    return state;
}
