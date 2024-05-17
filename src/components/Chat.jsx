import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");

  function chatHandler() {
    setLoading(true);
    const userMessage = { role: "user", content: userQuestion };
    setMessages([...messages, userMessage]);
    setLoading(false);
  }

  return (
    <div id="chat-container">
      <div className="h-96 w-3/4 bg-white" id="chat-window">
        {messages.map((message, index) => {
          return <p key={index}>{message.content}</p>;
        })}
      </div>
      <label htmlFor="question"></label>
      <input
        type="text"
        name="question"
        id="question"
        placeholder="Ask my AI a question"
        onChange={(e) => setUserQuestion(e.target.value)}
      />
      <button onClick={() => chatHandler()} disabled={loading ? true : false}>
        Send
      </button>
    </div>
  );
};

export default Chat;
