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
        const acceptedUser = state.requestsToUser.filter(
            (user) => user.id == state.acceptedId
        );
        const restOfUsers = state.requestsToUser.filter(
            (user) => user.id != state.acceptedId
        );

        console.log('acc user: ', acceptedUser, restOfUsers);

        state = {
            ...state,
            acceptedId: action.acceptedId,
            requestsToUser: restOfUsers,
            friends: state.friends.push(acceptedUser),
        };
    }

    console.log("Redux state", state);
    return state;
}
