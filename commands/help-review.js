const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var serverEmbed = new discord.RichEmbed()
        .setTitle("**World Company - Help menu**")
        .setDescription("Welkom in het help menu van de review commando's, " + message.author)
        .setColor("#4cda49")
        .addField("Wil je laten weten wat je van onze bedrijven vindt?", "Gebruik dan het commando `?review`")
        .addField("Wil je een suggestie achterlaten voor ons?", "Gebruik dan het commando `?suggestie`")
        .setFooter("© World Company")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help-review"
}