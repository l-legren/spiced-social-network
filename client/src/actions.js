import instance from "./axios";

export async function getFriends(id) {
    try {
        var { data } = await instance.get(`/get-friends/${id}`);
        console.log(`Getting friends of ${id} from server: `, data);
    } catch {
        (err) => console.log("Error fetching friends: ", err);
    }

    return {
        type: "SHOW_FRIENDS",
        friendsList: data,
    };
}

export async function getRequesters(id) {
    try {
        var { data } = await instance.get(`/get-requesters/${id}`);
        console.log(`Getting requesters of ${id} from server: `, data);
    } catch {
        (err) => console.log("Error fetching requesters: ", err);
    }

    return {
        type: "SHOW_REQUESTERS",
        requestersList: data,
    };
}

export async function getOpenRequest(id) {
    try {
        var { data } = await instance.get(`/get-open-requests/${id}`);
        console.log(`Getting open requests of ${id} from server: `, data);
    } catch {
        (err) => console.log("Error fetching open requests: ", err);
    }

    return {
        type: "SHOW_OPEN_REQUESTS",
        openRequestsList: data,
    };
}
