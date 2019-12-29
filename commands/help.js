const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var serverEmbed = new discord.RichEmbed()
        .setTitle("**World Company - Help menu**")
        .setDescription("Welkom in het help menu, " + message.author + "Kies hier één van de verschillende help commando's om een geavenceerder help menu te openen.")
        .setColor("#4cda49")
        .addField("Wil je weten welk commando u nodig heeft?", "Gebruik dan het command `?help`")
        .addField("Wil je de informatie commando's weten?", "Gebruik dan het commando `?help-info`")
        .addField("Wil je weten welke muziek functies er zijn en hoe je deze kunt gebruiken?", "Gebruik dan het commando `?help-muziek`")
        .addField("Wil je ons beoordelen op onze services en dit delen met spelers?", "Gebruik dan het commando `?help-review`")
        .addField("Wil je de overige commando's weten?", "Gebruik dan het commando `?help-overig`")
        .setFooter("© World Company")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help"
}