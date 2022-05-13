require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bot = require("./bot");
const discordChannels = require("./enums/discordChannels");

app.post("/error", (req, res) => {
  if (!bot?.user) {
    res.status(400);
    res.send("The bot is dead");
    return;
  }

  const { message } = req.body;
  const channel = bot.channels.cache.find(
    (channel) => channel.id === discordChannels.ERRORS
  );
  channel.send(message);
  res.send("enViado");
});

app.listen(process.env.PORT || 5050, () => {
  console.log("App is started");
});
