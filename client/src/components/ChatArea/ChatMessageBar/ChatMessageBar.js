import "./ChatMessageBar.css";
import ChatMessage from "../TextArea/ChatMessage";
import {useState} from 'react';
function ChatMessageBar(props) {
    const [body, setBody] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const obj = {op: 2, body: body}
    }
    return (
            <form className="MessageForm">
                <div className="MessageBar">
                    <input className="MessageInput" onChange={e => setBody(e.target.value)} placeholder={"Message @" + props.name }/>
                </div>
            </form>
    )
}

export default ChatMessageBar;