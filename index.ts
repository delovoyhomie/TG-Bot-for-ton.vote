import axios from 'axios';

const BOT_TOKEN = 'YOUR-TOKEN'; // Замените на токен вашего бота
const CHAT_ID = '- YOUR-CHAT-ID'; // Замените на ID чата, куда вы хотите отправить сообщение
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function sendMessage(chatId: string, text: string): Promise<void> {
  try {
    await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: chatId,
      text: text,
    });
    console.log('Сообщение успешно отправлено.');
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
  }
}

// Замените 'Hello, World!' на текст, который вы хотите отправить
sendMessage(CHAT_ID, 'Hello, World!');
