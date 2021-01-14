// import { getFriends } from "./actions";

export default function reducer(state = {}, action) {
    if (action.type == "SHOW_FRIENDS") {
        state = {
            ...state,
            friends: action.friends,
        };
    }
    return state;
}
