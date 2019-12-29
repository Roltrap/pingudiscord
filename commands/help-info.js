const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var serverEmbed = new discord.RichEmbed()
        .setTitle("**World Company - Help menu**")
        .setDescription("Welkom in het help menu van de info commando's, " + message.author)
        .setColor("#4cda49")
        .addField("Wil je informatie over de Discord server?", "Gebruik dan het commando `?serverinfo`")
        .addField("Wil je informatie over de Discord bot?", "Gebruik dan het commando `?serverinfo`")
        .addField("Wil je weten waar onze bedrijven liggen?", "Gebruik dan het commando `?locaties`")
        .setFooter("© World Company")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help-info"
}