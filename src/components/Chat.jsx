import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");

  async function chatHandler() {
    setLoading(true);
    const userMessage = { role: "user", content: userQuestion };
    setMessages((messages) => [...messages, userMessage]);
    setUserQuestion("");
    const aiResponse = await fetch("http://localhost:3000/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(userMessage),
    });
    const aiMessage = await aiResponse.json();
    setMessages((messages) => [...messages, aiMessage]);
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
