import { useSelector } from "react-redux";
import { socket } from "./socket";

const Chat = () => {
    const recentMessages = useSelector(
        (state) => (state && state.recentMessages) || []
    );
    const onlineUsers = useSelector(
        (state) => (state && state.usersConnected) || []
    );

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            console.log("user pressed enter!");
            socket.emit("new chat message", e.target.value);
            e.target.value = null;
        }
    };

    return (
        <>
            <h2>Welcome to the Chatroom</h2>
            <div className="users-online">
                {onlineUsers.length == 1 ? (
                    <h3>{onlineUsers.length} user is online</h3>
                ) : (
                    <h3>{onlineUsers.length} users are online</h3>
                )}
                <div style={{ display: "flex" }}>
                    {onlineUsers.map((user, idx) => {
                        return (
                            <div key={idx} style={{ marginRight: 10}}>
                                <img
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                    }}
                                    src={user.profile_pic}
                                />
                                <p>{user.first}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="chat-container">
                {recentMessages.map((msg, idx) => {
                    return (
                        <div key={idx} className="message-container">
                            <div id="chat-image-wrapper">
                                <img
                                    src={msg.profile_pic}
                                    alt={`${msg.first} ${msg.last}`}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>{`${msg.first} ${msg.last} said at ${msg.timestamp}`}</p>
                                </div>
                                <div>
                                    <p>{msg.message}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <textarea
                    style={{marginBottom: 30}}
                    onKeyDown={handleKeyDown}
                    placeholder="Leave your message here..."
                ></textarea>
            </div>
        </>
    );
};

export default Chat;
