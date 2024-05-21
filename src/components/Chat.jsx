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
    try {
      const aiResponse = await fetch("https://ai-hype-man.fly.dev", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userMessage),
      });
      const aiMessage = await aiResponse.json();

      if (!aiResponse.ok) {
        throw new Error(aiResponse.statusText);
      }
      setMessages((messages) => [...messages, aiMessage]);
    } catch (err) {
      const errorMessage = {
        role: "assistant",
        content: `Im sorry but I am experiencing technical difficulties. ${err}`,
      };
      setMessages((messages) => [...messages, errorMessage]);
    }
    setLoading(false);
  }

  return (
    <div id="chat-container" className="flex flex-col">
      <div
        className="no-scrollbar flex h-[calc(65svh)] flex-col overflow-scroll rounded-lg border-2 border-black bg-white shadow-[0px_3px_5px_0px_rgb(0,0,0,0.4)] sm:h-[62svh]"
        id="chat-window"
        ref={chatWindowRef}
      >
        {messages.map((message, index) => {
          return (
            <div
              className={`m-3 rounded-md p-2 text-sm sm:max-w-[50%] sm:text-base ${
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
        autoComplete="off"
        onSubmit={(e) => chatHandler(e)}
        className="mt-4 flex rounded-lg border-y-2 border-l-2 border-black bg-white shadow-[0px_3px_5px_0px_rgb(0,0,0,0.4)]"
      >
        <input
          className="flex-grow rounded-lg  p-2"
          type="text"
          name="question"
          id="question"
          required={true}
          minLength={2}
          maxLength={75}
          placeholder="Ask my AI a question"
          onChange={(e) => setUserQuestion(e.target.value)}
          ref={inputRef}
        />
        <button
          type="submit"
          className={`w-24 rounded-md border-l-2 border-r-2 border-black bg-emerald-600 px-4 py-2 font-bold duration-200 ease-in enabled:bg-emerald-400 enabled:hover:bg-emerald-500`}
          disabled={loading ? true : false}
        >
          {loading ? "Thinking" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
