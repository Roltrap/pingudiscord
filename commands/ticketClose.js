const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categorieId = "629027972753522731";

    if (message.channel.parentID == categorieId) {

        message.channel.delete();

    } else {

        message.channel.send("U kunt dit commando enkel in een ticket kanaal uitvoeren.");

    }

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Ticket is gesloten")
        .setColor("#4cda49")
        .setDescription("Dit ticket is gesloten: " + message.channel.name)
        .setFooter("© World Bot")
        .setTimestamp();

    var logChannel = message.guild.channels.find("name", "ticket-logs");
    if (!logChannel) return message.channel.send("Lieve Roltrap, ik kan het log channel niet vinden! Fix dit ff thanks alvast <3 .")

    logChannel.send(embedCloseTicket);

}

module.exports.help = {
    name: "close"
}