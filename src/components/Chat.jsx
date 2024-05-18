import { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");

  const chatWindowRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatWindowRef.current.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [messages]);

  async function chatHandler(e) {
    e.preventDefault();
    setLoading(true);
    const userMessage = { role: "user", content: userQuestion };
    setMessages((messages) => [...messages, userMessage]);
    setUserQuestion("");
    inputRef.current.value = "";
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
    <div id="chat-container" className="flex flex-col">
      <div
        className="no-scrollbar flex h-96 flex-col overflow-scroll rounded-lg border-2 border-black bg-white"
        id="chat-window"
        ref={chatWindowRef}
      >
        {messages.map((message, index) => {
          return (
            <div
              className={`m-3 max-w-[50%] rounded-md p-2 ${
                message.role === "user"
                  ? "self-start bg-blue-300 "
                  : "self-end bg-emerald-400"
              }`}
              key={index}
            >
              <p className="font-bold italic">
                {message.role === "user" ? "User" : "Non-Bias AI"}
              </p>
              <p>{message.content}</p>
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(e) => chatHandler(e)}
        className="my-4 flex rounded-lg border-y-2 border-l-2 border-black bg-white "
      >
        <input
          className="flex-grow rounded-lg  p-2"
          type="text"
          name="question"
          id="question"
          placeholder="Ask my AI a question"
          onChange={(e) => setUserQuestion(e.target.value)}
          ref={inputRef}
        />
        <button
          type="submit"
          className="rounded-md border-l-2 border-r-2 border-black bg-emerald-400 px-4 py-2 font-bold"
          // onClick={() => chatHandler()}
          disabled={loading ? true : false}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
