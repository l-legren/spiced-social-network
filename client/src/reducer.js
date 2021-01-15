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
            friends: [...state.friends, state.requestsToUser.find(
                (user) => user.id == action.acceptedId
            )],
        };
    }

    if (action.type == 'REMOVE_FRIENDSHIP') {
        state = {
            ...state,
            friends: state.friends.filter(
                user => user.id != action.unfriendId
            ),
            requestsFromUser: state.requestsFromUser.filter(
                user => user.id != action.unfriendId
            )
        };
    }

    console.log("Redux state", state);
    return state;
}
