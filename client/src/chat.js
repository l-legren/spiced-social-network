import { useSelector } from "react-redux";
import { socket } from "./socket";

const Chat = () => {
    const recentMessages = useSelector(
        (state) => (state && state.recentMessages) || []
    );

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            console.log("user pressed enter!");
            socket.emit("new chat message", e.target.value);
        }
    };

    return (
        <>
            <h2>Welcome to the Chat Room</h2>
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
                    onKeyDown={handleKeyDown}
                    placeholder="Leave your message here..."
                ></textarea>
            </div>
        </>
    );
};

export default Chat;
