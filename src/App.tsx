import { useChatCompletion } from "./hooks/useChatCompletion";
import "./App.css";

function App() {
  const { messages, input, setInput, sendMessage, loading } =
    useChatCompletion();

  return (
    <div className="card">
      <div className="card-header">
        {messages.map((msg, index) =>
          index === 0 ? null : (
            <div key={index} className="message">
              {msg.content}
            </div>
          )
        )}
        {loading && <div className="message assistant">Typing...</div>}
      </div>
      <form className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="input"
        />
        <button onClick={sendMessage} className="button" disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default App;
