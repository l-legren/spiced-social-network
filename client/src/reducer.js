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
            requestsToUser: state.requestsToUser.filter(
                (user) => user.id != action.acceptedId
            ),
            friends: [
                ...state.friends,
                state.requestsToUser.find(
                    (user) => user.id == action.acceptedId
                ),
            ],
        };
    }

    if (action.type == "REMOVE_FRIENDSHIP") {
        state = {
            ...state,
            friends: state.friends.filter(
                (user) => user.id != action.unfriendId
            ),
            requestsFromUser: state.requestsFromUser.filter(
                (user) => user.id != action.unfriendId
            ),
        };
    }

    if (action.type == "GET_USER_INFO") {
        state = {
            ...state,
            userInfo: Object.keys(action.userInfo)
                .filter((key) =>
                    ["id", "first", "last", "profile_pic"].includes(key)
                )
                .reduce((obj, key) => {
                    obj[key] = action.userInfo[key];
                    return obj;
                }, {}),
        };
    }

    if (action.type == "ADD_RECENT_MESSAGES") {
        state = {
            ...state,
            recentMessages: action.recentMessages,
        };
    }

    console.log("Redux state", state);
    return state;
}
