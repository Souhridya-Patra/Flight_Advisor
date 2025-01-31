import { createChatBotMessage } from "react-chatbot-kit";
//import { ThemeProvider } from "styled-components";
//import { ReactComponent as AirplaneIcon } from "./airplane-icon.svg"; // Add an airplane icon SVG file
import "./Chat.css"; // Include a CSS file for custom styles

// Define a custom theme for the chatbot
const theme = {
  background: "#f0f8ff", // Light blue sky background
  headerBgColor: "#1e90ff", // Deep sky blue for the header
  headerFontColor: "#fff", // White font for the header
  botBubbleColor: "#1e90ff", // Bot message bubble in blue
  botFontColor: "#fff", // Font color for bot messages
  userBubbleColor: "#f5f5f5", // Light gray for user messages
  userFontColor: "#000", // Black font for user messages
};

// Bot configuration
const config = {
  botName: "Flight Advisor ✈️",
  initialMessages: [
    createChatBotMessage(
      "Hi there! I'm your Flight Advisor. I can help you find the lowest airfare and flight details. How can I assist you today?"
    ),
  ],
  customComponents: {
    // Add custom header with airplane icon
    header: () => (
      <div className="chatbot-header">
        <h3 className="chatbot-title" style="color:blue">Flight Advisor ✈️</h3>
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1e90ff",
    },
    chatButton: {
      backgroundColor: "#1e90ff",
    },
  },
};

export default config;
