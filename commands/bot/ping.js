const { Command } = require('discord-akairo');
const {MessageEmbed} = require("discord.js")
class Ping extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping']
    });
  }

  async exec(message) {
   const embed = new MessageEmbed()
    .setColor("RED")
    .setTitle("Ping Statistics")
    .setDescription(`API Latency: ${this.client.ws.ping}ms\nResponse Latency: ${Date.now() - message.createdAt}ms`)
    await message.channel.send(embed)
  }
}

module.exports = Ping