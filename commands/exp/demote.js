const Levels = require('discord-xp');
const { getEmoji } = require('../../utils/functions');

module.exports = {
  name: 'demote',
  ownerOnly: true,
  helpIgnore: true,
  async execute(message, args) {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send("You didn't mention a user!");
    const xp = parseInt(args[1]);
    if (!xp)
      return message.channel.send(
        "You didn't specify how many EXP levels to take away!"
      );
    Levels.subtractLevel(user.id, message.guild.id, xp)
      .then(() =>
        message.channel.send(
          `**${xp} Levels** have been taken away from **${
            user.username
          }** ${getEmoji('SadPog', message.client)}`
        )
      )
      .catch((err) => console.log(err));
  },
};
