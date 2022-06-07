const TelegramBot = require('node-telegram-bot-api');
const simpleGit = require('simple-git');
require('dotenv').config()
const git = simpleGit().clean(simpleGit.CleanOptions.FORCE);

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
bot.on('channel_post', (msg) => {
  if ( msg.text.includes("KINTO") ) {
    console.log(msg.text);
    const fs = require('fs');

    fs.appendFile('README.md', `\n${msg.text}\n\n---\n`, function (err) {
      if (err) throw err;
      git.add(['README.md']);
      git.commit('new sms', (err, data) => {
        if (err) throw err;
        console.log(data);
        git.push();
      });
    });
  }
});

