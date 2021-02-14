const {
  AkairoClient,
  CommandHandler,
  ListenerHandler
} = require('discord-akairo');
const path = require("path")
const { ownerID, prefix } = require('../config.json')
class Client extends AkairoClient {
  constructor() {
    super(
    {
      ownerID
    },
    {
      disableEveryone: true
    })
    this.cmdhandler = new CommandHandler(this, {
      directory: path.join(__dirname, "..", "commands/"),
      prefix: prefix
    })
    this.eventhandler = new ListenerHandler(this, {
      directory: path.join(__dirname, '..', 'events/')
    });
  }
  async start(token) {
    this.eventhandler.setEmitters({
      commandHandler: this.cmdhandler
    })
    this.cmdhandler.useListenerHandler(this.eventhandler);
    this.eventhandler.loadAll();
    this.cmdhandler.loadAll();

    return super.login(token);
  }
}
module.exports = Client