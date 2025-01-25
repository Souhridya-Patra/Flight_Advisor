import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Flight Advisor',
    initialMessages: [
        createChatBotMessage("Hello I can advise Flight for lowest price")
    ]
}

export default config;