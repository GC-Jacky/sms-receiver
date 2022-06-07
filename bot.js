const TelegramBot = require('node-telegram-bot-api');
const simpleGit = require('simple-git');

const token = '5327317524:AAGyhyD1akhsyCqu7CRtQNbeHbOBDHnxF1Y';
const bot = new TelegramBot(token, {polling: true});
bot.on('channel_post', (msg) => {
  if ( msg.text.includes("KINTO") ) {
    console.log(msg.text);
    const fs = require('fs');

    fs.appendFile('message.md', `\n${msg.text}\n\n---\n`, function (err) {
      if (err) throw err;
      simpleGit.add(['message.md']);
      simpleGit.commit('message.md', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    });
  }
});

