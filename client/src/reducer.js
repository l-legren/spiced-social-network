// import { getFriends } from "./actions";

export default function reducer(state = {}, action) {
    if (action.type == "SHOW_FRIENDS") {
        state = {
            ...state,
            friends: action.friendsList,
        };
    }
    console.log('Redux state', state);
    return state;
}
