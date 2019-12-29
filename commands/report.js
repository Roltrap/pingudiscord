const discord = require("discord.js");
const botConfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {

    // <prefix>report spelersnaam reden

    var prefix = botConfig.prefix;

    if (!args[0]) return message.channel.send(`Gebruik het commando alsvolgt: ${prefix}report <Speler> <Reden>`);

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send(`Deze gebruiker is niet gevonden op de Discord server.`);

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send(`Geef een reden voor de report op.`);

    var reportEmbed = new discord.RichEmbed()
        .setDescription("World Company - Report")
        .setColor("#ee0000")
        .addField("Reported gebruiker", `${user}`)
        .addField("Gereport door", `${message.author}`)
        .addField("Reden", reason)
        .setFooter("© World Company")
        .setTimestamp();

    var reportChannel = message.guild.channels.find("name", "mod-logs");
    if(!reportChannel) return message.channel.send(`Lieve @Roltrap, ik kan het log channel niet vinden! Fix dit ff thanks alvast <3 .`);
    message.channel.send(`${user} is gereport. Een stafflid zal kijken naar uw report. Die beslist wat er mee zal gebeuren.`);

    message.delete();

    return reportChannel.send(reportEmbed);
    

}

module.exports.help = {
    name: "report"
}