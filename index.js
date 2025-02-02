const TelegramBot = require('node-telegram-bot-api');  
const dotenv= require('dotenv');
const axios = require('axios'); 

dotenv.config();

//Token fetched using @BotFather to create a new bot
const Token = process.env.BOT_TOKEN;


const bot = new TelegramBot(Token, {polling: true});    

// bot.on('message', (msg) => {
//     const text = msg.text;
//     console.log("Message Received ",text);

//     bot.sendMessage(msg.chat.id,'You Said: '+ text);
//     })

bot.onText(/\/start/, (msg) => {   
    bot.sendMessage(msg.chat.id, "Hello I am a Bot, How can I help you?");
});

bot.onText(/\/joke/, async (msg) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');


    const setup = response.data.setup;
    const punchline = response.data.punchline;

    bot.sendMessage(msg.chat.id, setup + " ,  " + punchline);
});