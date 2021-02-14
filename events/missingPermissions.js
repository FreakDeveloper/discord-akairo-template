const { Listener } = require('discord-akairo');

class MissingPerms extends Listener {
  constructor() {
    super('missingPermissions', {
      emitter: 'commandHandler',
      event: 'missingPermissions'
    });
  }

   async exec(message, command, type, missing) {
    let msg
    if (type === "client") msg = "I Dont Have Enough Permissions."
    if (type === "user") msg = "You Dont Have Enough Permissions."
    await message.channel.send(msg)
  }
};
module.exports = MissingPerms