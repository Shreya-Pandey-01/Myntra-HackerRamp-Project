import { useState } from "react";
import "./Chatbot.css";
import axios from "axios";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  async function generateAnswer() {
    const userMessage = { sender: "user", text: question };
    setMessages([...messages, userMessage]);

    setQuestion("");

    // Add a temporary loading message from the bot
    const loadingMessage = { sender: "bot", text: "Loading..." };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC1BZjHcLCktsAGNqWTQOmdcWji4y09J9c",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const botMessage = {
        sender: "bot",
        text: response.data.candidates[0].content.parts[0].text,
      };

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        botMessage,
      ]);
    } catch (error) {
      const errorMessage = { sender: "bot", text: "An error occurred. Please try again later." };
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), 
        errorMessage,
      ]);
    }
  }

  return (
    <div className="App">
      <div className="title-fashion"><h1><i>Fashionista ChatAI</i></h1></div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && generateAnswer()}
        />
        <button onClick={generateAnswer}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
