import { useSelector } from "react-redux";
import { socket } from "./socket";

const Chat = () => {
    // const chatMessages = useSelector((state) => state && state.chatMessages);

    const handleKeyDown = (e) => {
        if (e.key == "enter") {
            console.log("user pressed enter!");
            socket.emit("new chat message", e.target.value);
        }
    };

    return (
        <>
            <h2>Welcome to the Chat Room</h2>
            <div className="chat-container">
                <p>Message</p>
            </div>
            <textarea onKeyDown={handleKeyDown}></textarea>
        </>
    );
};

export default Chat;
