var Discord = require("discord.js");
var bot = new Discord.Client();

var botConfig = require("./botconfig.json");

bot.on("message", msg => {

    let prefix = "!!"
    if (!msg.content.startsWith(prefix)) return;

    if (msg.content.startsWith(prefix + "ping")) {
        msg.channel.sendMessage("pong!");
    }

});

bot.on('ready', () => {
    console.log("I'm ready!");
});

bot.login(botConfig.token);
