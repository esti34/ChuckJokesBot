import dotenv from "dotenv";
import { handleSetLanguage, handleSelectJoke } from "./services/botActionsHandler.js"
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, { polling: true });

telegramBot.onText(/set language (.+)/, (msg, match) => {
    handleSetLanguage(match).then(messageToSend => {
        telegramBot.sendMessage(msg.chat.id, messageToSend);
    });
});

telegramBot.onText(/\d+/, (msg) => {
    handleSelectJoke(msg.text).then(messageToSend => {
        telegramBot.sendMessage(msg.chat.id, messageToSend);
    });
});