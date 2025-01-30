import '../styles/Chatbox.css'
import { BASE_URL } from '../utils/constant';
const send = `${BASE_URL}/send.svg`;
const cross = `${BASE_URL}/cross.svg`;
const threedot = `${BASE_URL}/threedot.svg`;
const avatar = `${BASE_URL}/avatar.svg`

function ChatBox({ chatbox, setChatbox }) {

    const messages = [
        {
            icon: avatar,
            message: 'I have very good experience with them while learning MERN. The explanation ',
            sender: "[Admin] Abhishek"
        },
        {
            icon: avatar,
            message: 'I have very good experience with them while learning MERN. The explanation ',
            sender: "[Admin] Abhishek"
        }
    ]
    return (
        <div className="umc-chatbox">
            <div className="umc-chatbox-top">
                <div className="umc-chatbox-top-head">
                    <p className="">Chatbox</p>
                    <img src={cross} alt="Cross" className="cursor-pointer" onClick={() => setChatbox(!chatbox)} />
                </div>
                {
                    messages.map((message, idx) => <div className="umc-chatbox-messages" key={idx}>
                        <div className="umc-chatbox-messages-top">
                            <div className="umc-chatbox-messages-top-left">
                                <img src={message.icon} alt={message.sender} />
                                <p className="">{message.sender}</p>
                            </div>
                            <img src={threedot} alt="Three dot" className="cursor-pointer" />
                        </div>
                        <div className="umc-chatbox-messages-bottom">{message.message}</div>
                    </div>)
                }
            </div>
            <div className="umc-chatbox-bottom">
                <div className="umc-chatbox-bottom-send">
                    <input type="text" name="message" id="message" placeholder="Send a message" className="umc-chatbox-bottom-send-input" />
                    <img src={send} alt="Send" />
                </div>
            </div>
        </div>
    );
}

export default ChatBox;