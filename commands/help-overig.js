const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var serverEmbed = new discord.RichEmbed()
        .setTitle("**World Company - Help menu**")
        .setDescription("Welkom in het help menu van de overige commando's, " + message.author)
        .setColor("#4cda49")
        .addField("Wil je ons wat vragen, iets vertellen of iets anders?", "Gebruik dan het commando `?ticket`")
        .addField("Wil je een speler reporten", "Gebruik dan het commando `?report`")
        .addField("Wil je weten waar onze bedrijven liggen?", "Gebruik dan het commando `?locaties`")
        .setFooter("© World Company")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help-overig"
}