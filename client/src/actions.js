import instance from "./axios";
// EXAMPLE OF AN ACTION
export function getFriends(id) {
    return {
        type: "SHOW_FRIENDS",
        friends: (async () => {
            try {
                console.log('getting friends from server....');
                const { data } = instance.get(`/get-friends/${id}`);
                console.log(data);
            } catch {
                (err) => console.log("Error fetching friends: ", err);
            }
        })(),
    };
}
