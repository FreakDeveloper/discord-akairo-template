const { Listener } = require('discord-akairo');
class CommandLoad extends Listener {
  constructor() {
    super('load', {
      emitter: 'commandHandler',
      event: 'load'
    });
  }

 async exec(command, isReload) {
  
    console.log(`Command Loaded: ${command.id}\n${this.client.cmdhandler.modules.size - 1} Left!`)
  }
};
module.exports = CommandLoad