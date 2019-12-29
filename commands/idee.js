const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var suggestie = args.join(" ");
    if (!suggestie) return message.channel.send("Gebruik het commando alsvolgt: !suggestie <Uw suggestie>");

    var suggestieEmbed = new discord.RichEmbed()
        .setTitle("**World Company - Suggestie**")
        .setColor("#4cda49")
        .addField("Suggestie", suggestie)
        .addField("Ingezonden door", message.author)
        .setFooter("© World Company")
        .setTimestamp();

    var suggestieChannel = message.guild.channels.find("name", "suggesties");
    if (!suggestieChannel) return message.channel.send("Lieve @Roltrap, ik kan het suggesties channel niet vinden niet vinden! Fix dit ff thanks alvast <3 .")

    suggestieChannel.send(suggestieEmbed).then(embedMessage => {
        embedMessage.react(`👍`);
        embedMessage.react(`👎`);
    });

}

module.exports.help = {
    name: "suggestie",
    setDescription: "Heb jij een suggestie? Zet hem dan hier en bij genoeg waardering passen wij hem wellicht toe."
}