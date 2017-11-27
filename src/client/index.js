const DiscordJS = require('discord.js');
const { readdirSync } = require('fs');
const { resolve } = require('path');

class Client extends DiscordJS.Client {
   constructor() {
      super();
      this.configuration = require('../configuration.json');
      this.commands = {};
      this.on('ready', this.readyHandler.bind(this));
      this.on('message', this.messageHandler.bind(this));
    }

    initiate() {
       return this.login(this.configuration.token);
    }

    loadCommands() {
      const commands = readdirSync(resolve('./src', 'commands'));
      commands.forEach((fileName) => {
         let PreloadedCommand = require(resolve('./src', 'commands', fileName));
         let command = new PreloadedCommand(this);
         this.commands[command.name] = command;
      });
    }

    readyHandler() {
      this.loadCommands();
      console.log(`Client ready | ${this.user.username}#${this.user.discriminator}`);
    }

    messageHandler(message) {
      if (!message.content.startsWith(this.configuration.prefix)) return;
      let commandArguments = message.content.replace(/<@!/g, '<@').substring(this.configuration.prefix.length).split(' ');
      let commandName = commandArguments.shift().toLowerCase();
      let command = this.commands[commandName];
      if (!command) return;
      return command.execute(message);
    }
}

module.exports = Client;
