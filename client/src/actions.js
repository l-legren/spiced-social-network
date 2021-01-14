import instance from "./axios";
// EXAMPLE OF AN ACTION
export async function getFriends(id) {

    try {
        var { data } = await instance.get(`/get-friends/${id}`);
        console.log(`Getting friends of ${id} from server: `, data);
    } catch {
        (err) => console.log("Error fetching friends: ", err);
    }
    

    return {
        type: "SHOW_FRIENDS",
        friendsList: data
    };
}
