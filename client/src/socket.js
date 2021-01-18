import io from "socket.io-client";
import { storeChatMessages } from "./actions";

export let socket;

export const init = (store) => {
    if (!socket) {
        socket = io.connect();
    }

    socket.on("most recent messages", (mostRecentMessages) => {
        store.dispatch(storeChatMessages(mostRecentMessages));
    });

    // socket.on("new message and user", (userAndMessage) => {
    //     store.dispatch(storeChatMessages(userAndMessage));
    // });
};
