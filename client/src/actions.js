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
        requestersList: data.filter((req) => req.id == req.requester_id),
        openRequests: data.filter((req) => req.id == req.receiver_id),
    };
}

export async function acceptFriend(otherUserId) {
    try {
        await instance.post("/change-status", {
            status: TEXT_BUTTON.ACCEPT_FRIENDSHIP,
            otherUserId: otherUserId,
        });
        console.log("Friendship set to true in DB");
    } catch {
        (err) => console.log("Error accepting friend request", err);
    }
    return {
        type: "ACCEPT_FRIENDSHIP",
        acceptedId: otherUserId,
    };
}

export async function removeFriend(otherUserId) {
    try {
        await instance.post("/change-status", {
            status: TEXT_BUTTON.FRIENDS,
            otherUserId: otherUserId,
        });
        console.log("Friendship removed from DB");
    } catch {
        console.log("Error removing friendship from DB");
    }

    return {
        type: 'REMOVE_FRIENDSHIP',
        unfriendId: otherUserId
    };
}

const TEXT_BUTTON = {
    NO_FRIENDS: "No friends",
    FRIENDS: "Friends",
    PENDING_REQUEST: "Pending request",
    ACCEPT_FRIENDSHIP: "Accept request",
    REJECT_FRIENDSHIP: "Ignore request",
};
