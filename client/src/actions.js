import instance from "./axios";

// GET USER INFO

export async function getUserInfo() {
    try {
        var { data } = await instance.get("/user");
        console.log("DATA USER", data);
    } catch {
        (err) => console.log("Error fetching data", err);
    }

    return {
        type: "GET_USER_INFO",
        userInfo: data,
    };
}

// DISPATCH MESSAGES FROM CHAT

export async function storeChatMessages(mostRecentMessages) {
    try {
        // console.log("Most recent messages action: ", mostRecentMessages);
    } catch {
        (err) => console.log("Error storing messages in State: ", err);
    }

    return {
        type: "ADD_RECENT_MESSAGES",
        recentMessages: mostRecentMessages,
    };
}

export async function addNewMessage(newMessage) {
    try {
        console.log("This is the very last message", newMessage);
    } catch {
        (err) => console.log("Error updating last message");
    }

    return {
        type: "ADD_NEW_MESSAGE",
        newMessage: newMessage,
    };
}

// FRIENDS, REQUESTERS AND OPEN REQUESTS

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
        type: "REMOVE_FRIENDSHIP",
        unfriendId: otherUserId,
    };
}

const TEXT_BUTTON = {
    NO_FRIENDS: "No friends",
    FRIENDS: "Friends",
    PENDING_REQUEST: "Pending request",
    ACCEPT_FRIENDSHIP: "Accept request",
    REJECT_FRIENDSHIP: "Ignore request",
};
