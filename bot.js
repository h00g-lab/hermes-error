const { Client, Intents } = require("discord.js");

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
bot.login(process.env.DISCORD_BOT_TOKEN);

bot.on("ready", (evt) => {
  console.log("Connected");
});

// bot.on("messageCreate", function (message) {
//   console.log("netrou");
//   console.log(message);
// });

module.exports = bot;